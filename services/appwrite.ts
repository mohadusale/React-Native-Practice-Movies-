import { Client, Databases, ID, Query } from 'appwrite';

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

const database = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
    // Hay que mirar primero si ya se ha guardado un registro con esos datos
    // Si se encuentra el registro, se aumenta el count
    // Si no encuentra, se crea un nuevo registro en la base de datos con count = 1
    try {
        const result = await database.listDocuments(DATABASE_ID, 'metrics', [
            Query.equal('searchTerm', query)
        ])
    
        if (result.documents.length > 0) {
            const existingMovie = result.documents[0];
    
            await database.updateDocument(
                DATABASE_ID,
                'metrics',
                existingMovie.$id,
                {
                    count: existingMovie.count + 1
                }
            )
        } else {
            await database.createDocument(
                DATABASE_ID,
                'metrics',
                ID.unique(), {
                    searchTerm: query,
                    movie_id: movie.id,
                    count: 1,
                    title: movie.title,
                    poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }
            )
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const getTrendingMovies = async (): Promise<TrendingMovie[] | undefined> => {
    try {
        const result = await database.listDocuments(DATABASE_ID, 'metrics', [
            Query.limit(5),
            Query.orderDesc('count'),
        ])

        return result.documents as unknown as TrendingMovie[];
    } catch (err) {
        console.log(err);
        return undefined;
    }
}