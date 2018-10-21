// import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
// import { AdminService } from "../admin.service";
// import * as __lodash from 'lodash';
// //import { UtilsService } from "core/utils.service";
// //import { AdminRestClientService } from 'core/restclient/admin/admin-restclient.service';
// //import {IBranchParamsResponse} from 'core/admin/Models/interfaces';
// import { SelectDropDownModule } from 'ngx-select-dropdown';
// //import { BranchParamsModel } from 'core/admin/models/branch-params-model';
// //import { IBranchParams } from 'core/admin/Models/interfaces';
// import { Observable } from "rxjs/Observable";

// declare var jQuery: any;



// @Component({
//   selector: "app-branchactivate",
//   templateUrl: "./branchactivate.component.html",
//   styleUrls: ["./branchactivate.component.scss"]
// })

// export class BranchactivateComponent  {

 


//   branchAURequired: boolean;
//   //notifier: any;
//   timer: Observable<number>;
//   subscription: any;
//   showMessage: boolean;
//   myData = [];
//  @ViewChild('searchBranchAU') searchBrachauInputRef: ElementRef;
//  @ViewChild('searchFeature') searchAdminFeatureDropdownValue: ElementRef;
//  @ViewChild('searchDate') searchDateToSearch: ElementRef;
//  @ViewChild('searchByValue') searchByValue: ElementRef;
//   @ViewChild('createbranchau') createbranchau: ElementRef;
//  @ViewChild('createfeaturename') createfeaturename: ElementRef;
//  @ViewChild('createactivationdate') createactivationdate: ElementRef;
//   @ViewChild('featureValue') createfeaturevalue: ElementRef;

//  // tslint:disable-next-line:typedef
//  featureValue;
//  // tslint:disable-next-line:typedef
//  branchParams = <IBranchParams>{};
//  showErrorBranchAU: boolean = false;

//   showButton: Boolean = true;
//   managerView: Boolean = false;
//   adminView: Boolean = false;
//   isCreate: Boolean = false;
//   isEdit: Boolean = false;
//   inputByValue: boolean = false;
//   inputByDate: boolean = false;
//   selectedType: string = '';


//   // tslint:disable-next-line:typedef
//   selectedData;
//   selectedAdminFeatureDropdownValue: string = '';
//   selectedAdminBranchDropdownValue: string = '';
//   selectedDateToSearch: string = '';
//   selectedBranchAuToSearch: string = '';
//   checkByDate: Boolean = true;
//   checkByValue: Boolean = false;
//   formData: any;
//   selectAdminDropdown: boolean = false;
//   appName: 'select app';
//   tableData: any;
//   sortDirection = 'asc';
//   selectedIndex: number;
//   sortDirectionFeature = 'asc';
//   sortDirectionActivation = 'asc';
//   config = {
//     displayKey: "type"
//   };
  
//   searchValue = null;
//   adminFeature= '';
//   featureConfig = {
//     displayKey: "type",
//     placeholder: "select feature"
//   };

//   branchAuDropdownConfig = {
//     displayKey: "type",
//     placeholder: "select BranchAU"
//   };
//   dropdownOptions: any;
//   navigationItems: any;
//   branchConfig: Array<IBranchParamsResponse> = [];
//   adminFeatureDropdown: any = [];
//   createadminFeatureDropdown: any= [];

//   branchAUDropdown: any = [];
//   adminBranchConfigValues: Array<IBranchParamsResponse> =[];
//   selectedRow = {
//     "branchAU": "",
//     "featureName": "",
//     "featureDefaultChar": "",
//     "entryTimestamp": "",
//     "updateTimestamp": ""
//   };
//   //private model: IBranchParams;
//     model = {
//     "branchAU": "",
//     "featureName": "",
//     "featureValue": "",
//     "activationDate": ""
//   };
//   constructor(private AdminService: AdminService, private adminRestClientService: AdminRestClientService ,) {
//   this.getAlldata();
//   this.adminBranchConfigValues = this.branchConfig;

//   }

//   getAlldata(){
//     this.adminRestClientService.getAllBranchParams();
//     this.branchConfig = this.adminRestClientService.BranchParamsList;
//     this.adminBranchConfigValues = this.branchConfig;
//     console.log(this.branchConfig);
//     }
//   sort(type) {
//     console.log(type);
//     if (type === 'branchAU') {
//       this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
//       this.branchConfig = UtilsService.lodash.orderBy(this.branchConfig, [`${type}`], [`${this.sortDirection}`]);
//     } else if (type === 'featureName') {
//       this.sortDirectionFeature = this.sortDirectionFeature === 'asc' ? 'desc' : 'asc';
//       this.branchConfig = UtilsService.lodash.orderBy(this.branchConfig, [`${type}`], [`${this.sortDirectionFeature}`]);
//     } else {
//       this.sortDirectionActivation = this.sortDirectionActivation === 'asc' ? 'desc' : 'asc';
//       this.branchConfig = UtilsService.lodash.orderBy(this.branchConfig, [`${type}`], [`${this.sortDirectionActivation}`]);
//     }

//   }

//   pad(n, width, z) {
//     z = z || '0';
//     n = n + '';
//     return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
//   }

//   handleFeature(event) {
//    // this.selectedAdminFeatureDropdownValue = event.target.value;
//    this.selectedAdminFeatureDropdownValue = this.searchAdminFeatureDropdownValue.nativeElement.value;
//     //event.value.length && event.value[0].type;

//   }

//   handleBranchau(event) {
//     this.selectedBranchAuToSearch = this.searchBrachauInputRef.nativeElement.value;
//   }

//   handleDate(event){
//    this.selectedDateToSearch = this.searchDateToSearch.nativeElement.value;
//   }

//   handleValue(event){
  
//   }

//   handleSearch() {

//     if (this.selectedAdminFeatureDropdownValue && this.selectedBranchAuToSearch) {
//       this.adminBranchConfigValues = this.branchConfig.filter((val, index) => val.featureName === this.selectedAdminFeatureDropdownValue && val.branchAU.indexOf(this.selectedBranchAuToSearch) > -1);
//     } else if (this.selectedAdminFeatureDropdownValue && !this.selectedBranchAuToSearch) {
//       this.adminBranchConfigValues = this.branchConfig.filter((val, index) => val.featureName === this.selectedAdminFeatureDropdownValue);
//     }else if (this.selectedAdminFeatureDropdownValue  && !this.selectedBranchAuToSearch) {
//       this.adminBranchConfigValues = this.branchConfig.filter((val, index) => val.featureName === this.selectedAdminFeatureDropdownValue);
//     } 
//     else if (!this.selectedAdminFeatureDropdownValue && this.selectedBranchAuToSearch) {
//       this.adminBranchConfigValues = this.branchConfig.filter((val, index) => val.branchAU.indexOf(this.selectedBranchAuToSearch, 0) > -1);
//     } else {
//       this.adminBranchConfigValues = this.branchConfig;
//     }
//     this.selectedAdminFeatureDropdownValue = '';
//     this.selectedBranchAuToSearch = '';
//     this.selectedDateToSearch = '';
//    // this.selectedValue = '';
//   }

//   checkifExist(data): any {
//     this.myData = this.branchConfig.filter((value: any) => {
//       // tslint:disable-next-line:semicolon
//        return (this.pad(value.branchAU, 7, 0) === this.pad(data.Branchau, 7, 0) && this.pad(value.featureName, 8, 0) === this.pad(data.FeatureName, 8,  0) )
//     });
//      console.log(this.myData);
//     console.log(this.branchConfig);
//      if (!this.myData.length){
//       this.showMessage = true;
      
//       return false;
//     } else{
//       return true;
//     }
    
  
//   }

//   isPresent(branchAU: any): boolean{
//     if(!branchAU){
//       this.branchAURequired = true;
//       return false;
//     }else{
//       this.branchAURequired = false;
//       return true;
//     }
    
//   }
//   createBranch(data: any){
    
//     if (data){
//       this.branchParams.Branchau = data.branchAU;
//       this.branchParams.FeatureDefaultChar = data.featureValue;
//       this.branchParams.FeatureName = data.featureName;
//       this.branchParams.ActivationDate = data.activationDate;
//       this.branchParams.FeatureDefaultNumber = null;
//     }
//     if(this.isPresent(data.branchAU) && this.isPresent(data.featureName) ){
//       if (this.checkifExist(this.branchParams)){
//         this.showErrorBranchAU = true;
//       }
//       else{
//         //show error message
//         this.isCreate = false;
//         console.log(this.branchParams);
//         this.showErrorBranchAU = false;
        
        
//         // this.notifier.notify( 'success', 'Record saved successfully' );
//         let branchParamsModel: BranchParamsModel = new BranchParamsModel(this.branchParams);
//         this.adminRestClientService.ProcessSingleBranchParams(branchParamsModel);
//         this.getAlldata();
//            jQuery('#exampleModal').modal("hide"); 
//       }

//   }
 
    

//   console.log(this.showErrorBranchAU);
//    }
//    // tslint:disable-next-line:typedef
  

//   saveChanges(data) {
//     console.log(data);
//     if(data){
//       this.branchParams.Branchau = data.branchAU;
//       this.branchParams.FeatureDefaultChar = data.featureDefaultChar;
//       this.branchParams.FeatureName = data.featureName;
//       this.branchParams.ActivationDate = null;
//       this.branchParams.FeatureDefaultNumber = null;
      
//     }
//      let branchParamsModel: BranchParamsModel = new BranchParamsModel(this.branchParams);
//     this.adminRestClientService.ProcessSingleBranchParams(branchParamsModel);
//    // this.adminRestClientService.ProcessSingleBranchParams(data);
//     this.branchConfig[this.selectedIndex] = data;
//   }

//   displayForm(value: string) {
//     this.showButton = false;
//     value === 'admin' ? this.adminView = true : this.managerView = true;
//     this.branchConfig = this.AdminService.getRestData();
//     console.log(this.branchConfig);
//   }
//   exit() {
//     this.showButton = true;
//     this.adminView = false;
//     this.managerView = false;
//     this.selectedAdminFeatureDropdownValue = '';
//     this.searchBrachauInputRef.nativeElement.value = '';
//     this.searchAdminFeatureDropdownValue.nativeElement.value = '';
//     this.searchDateToSearch.nativeElement.value = '';
//   }


//   handleEdit(data, index: number) {
//     this.isCreate = false;
//     this.selectedIndex = index;
//     this.selectedRow = data;
//     this.showErrorBranchAU = false;
//     //this.createadminFeatureDropdown = false;
   
//  }

//   handleCreate(data, index: number){
//     this.showErrorBranchAU = false;
//     this.isCreate = true;
//     this.model.featureValue = 'YES';
//      this.model.featureName = '';
//     this.model.branchAU = '';
//     this.model.activationDate = '';
//     this.branchAURequired = false;

    
//   }


//   clearSearch(){
//     this.getAlldata();
//     this.searchBrachauInputRef.nativeElement.value = '';
//       this.searchAdminFeatureDropdownValue.nativeElement.value = '';
//     this.searchDateToSearch.nativeElement.value = '';
//     this.searchDateToSearch.nativeElement.value = '';
//   }

//   selectChangeHandler(selected: any) {
//     this.navigationItems.branchConfigs = this.tableData.filter((data, value) => data.appName === selected);
//     this.selectedData = this.formData[this.selectedType];
//   }
//   selectedValue() {
//     this.selectedData = this.formData[this.selectedType];
//   }
//   // tslint:disable-next-line:typedef
//   ngOnInit() {
    
//     this.adminFeatureDropdown = [
//       {id: -1, type: ""},
//       { id: 1, type: 'MANAGER_VIEW' },
//       { id: 2, type: 'MANAGER_VIEW.ACTIVATION_DATE' },
//       { id: 3, type: 'ONE_INTERFACE.ACTIVATION_DATE' },
//       { id: 4, type: 'ONE_INTERFACE' }
//     ];

  
//   this.createadminFeatureDropdown = [
//     { id: 1, type: 'MANAGER_VIEW' },
//      { id: 2, type: 'ONE_INTERFACE' }
//   ];

// }
// // tslint:disable-next-line:typedef
// changeBranchAU(){
//   this.showErrorBranchAU = false;
//   this.branchAURequired = false;
// //  this.featureNameRequired = false;

// }
// public searchByActivation(event: any, type: any): void {
//     if (type === 'date') {
//       this.checkByValue = false;
//       this.checkByDate = true;
//     } else {
//       this.checkByDate = false;
//       this.checkByValue = true;
//     }

//   }

//   public handleInputbyType(event: any, type: any): void{
//      if (type === 'date') {
//       this.inputByDate = true;
//       this.inputByValue = false;
//     }else if (type === 'value'){
//       this.inputByDate = false;
//       this.inputByValue = true;
//     } 
//     else {
//       this.inputByDate = false;
//       this.inputByValue = false;
//     }

//   }

// public searchByDate(event: any): void {
//      this.branchConfig = this.branchConfig.filter((value, index) => {
//       return value.featureDefaultChar && value.featureDefaultChar.toLowerCase().indexOf(event) > -1;
//     });
    
//   }
// }
   
