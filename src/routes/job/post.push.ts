import PendingJob from "../../model/PendingJob"

export default async function push(req: any, res: any){
    const job = PendingJob.createInstance(req.body.ip)
    // console.log(job.ip)
    res.status(200).json({res: "ok"})
}
