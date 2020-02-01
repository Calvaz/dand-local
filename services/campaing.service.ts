import Campaign from "../models/campaing";

export default class CampaignService{  
    private data: Campaign[];

    constructor(){
        var storage = localStorage.getItem('dataDand')
        if(storage) 
            this.data = JSON.parse(storage);
        else
            this.data = [];
    }
        
    public addCampaign(campaign: Campaign){
        this.data.push(campaign);
    }
}

