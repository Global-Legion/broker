import PendingJobQueueSingleton from "../../model/PendingJobsQueueSingleton";

export default async function pull(req: any, res: any){
    const nextJob = PendingJobQueueSingleton.instance.nextJob
    if(nextJob === undefined){
        res.status(204).json()
    } else {
        res.status(200).json({ip: nextJob.ip})
    }

}
