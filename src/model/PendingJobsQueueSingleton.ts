import PendingJob from "./PendingJob"

export default class PendingJobQueueSingleton
{
    private static _instance: PendingJobQueueSingleton
    private queue: PendingJob[]

    private constructor(){
        this.queue = new Array<PendingJob>()
    }

    public append(job: PendingJob): void{
        this.queue.push(job)
    }

    public get nextJob(): PendingJob | undefined{
        return this.queue.shift()
    }

    public static createInstance(){
        this._instance = new this()
    }

    public static get instance(){
        return this._instance
    }
}
