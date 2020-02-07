import * as mongoose from "mongoose";

export class MongooseHelper {

    public static connect(url: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
            (<any>mongoose).Promise = global.Promise;
            mongoose.set('useCreateIndex', true)
            mongoose.connection
                .once('open', () => resolve())
                .on('error', error => reject(error))
        });
    }

    public static disconnect(): void {
        mongoose.disconnect();
    }
}
