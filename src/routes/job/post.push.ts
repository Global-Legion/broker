import PendingJobQueueSingleton from "../../model/PendingJobsQueueSingleton"
import PendingJob from "../../model/PendingJob"

export default async function push(req: any, res: any){
    const job = PendingJob.createInstance(req.body.ip)
    for(let i = 0; i < req.body.workers; i++){
        PendingJobQueueSingleton.instance.append(job)
    }
    res.status(200).json({res: "ok"})
}
