export default class PendingJob {

    private constructor(private ipAddress: string){

    }

    static createInstance(ip: string){
        return new PendingJob(ip)
    }

    get ip(): string {
        return this.ipAddress
    }

    equalsTo(p: PendingJob): boolean {
        return this.ipAddress === p.ip
    }

    toString(): string {
        return "Pending Job requested from IP: " + this.ip
    }
}
