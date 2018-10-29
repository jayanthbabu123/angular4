

export class BranchParamsModel {

    public featureName: string;
    public featureDefaultChar: string;
    public branchau: string;
    public featureDefaultNumber: Number;

    public constructor(branchParams: IBranchParams) {
        this.branchau = branchParams.Branchau;
        this.featureDefaultChar = branchParams.FeatureDefaultChar;
        this.featureDefaultNumber = branchParams.FeatureDefaultNumber;
        this.featureName = branchParams.FeatureName;

    }
}


export class BranchParamsResponse {

    public branchAU: string;
    public featureName: string;
    public featureDefaultChar: string;
    public entryTimeStamp: string;
    public updateTimeStamp: string;

    public constructor(branchParamsResponse: IBranchParamsResponse) {
        this.featureName = branchParamsResponse.featureName;
        this.branchAU = branchParamsResponse.branchau;
        this.featureDefaultChar = branchParamsResponse.featureDefaultChar;
        this.entryTimeStamp = branchParamsResponse.entryTimeStamp;
        this.updateTimeStamp = branchParamsResponse.updateTimeStamp;
    }
}


export interface IBranchParams {
    FeatureName: string;
    FeatureDefaultChar: string;
    Branchau: string;
    FeatureDefaultNumber: Number;

}

export interface IBranchParamsResponse {

    featureName: string;
    branchau: string;
    featureDefaultChar: string;
    entryTimeStamp: string;
    updateTimeStamp: string;

}



