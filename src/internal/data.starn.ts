export class DataStarn {

    typesEquals(data: any, type: string) {
        if(typeof(data) != type) {
            throw new Error(`TypeError: Type of ${data} is different ${type}`);
        }
    }

    stringToArray(data: Buffer) {
        return data
        .toString()
        .split('\n')
    }
}