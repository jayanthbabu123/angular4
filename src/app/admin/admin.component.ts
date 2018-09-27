import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  showButton: Boolean = true;
  managerView: Boolean = false;
  adminView: Boolean = false;
  selectedType: string = '';
  selectedData;
  selectedAdminFeatureDropdownValue: string;
  selectedAdminBranchDropdownValue: string;
  formData: any;
  selectAdminDropdown: any;
  appName: 'select app';
  tableData: any;
  sortDirection = 'asc';
  selectedIndex: number;
  sortDirectionFeature = 'asc';
  sortDirectionActivation = 'asc'
  config = {
    displayKey: "type"
  };
  featureConfig = {
    displayKey: "type",
    placeholder: "select feature"
  };
  branchAuDropdownConfig = {
    displayKey: "type",
    placeholder: "select BranchAU"
  }
  dropdownOptions: any;
  navigationItems: any;
  branchConfig: any = [
    {
      "branchAU": "0000910",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "No",
      "entryTimestamp": 1508280880526,
      "updateTimestamp": 1508280880526
    },
    {
      "branchAU": "00007",
      "featureName": "1intf",
      "featureDefaultChar": "test2",
      "entryTimestamp": 1536774312119,
      "updateTimestamp": 1536774312119
    },
    {
      "branchAU": "00007",
      "featureName": "1intf7",
      "featureDefaultChar": "test78",
      "entryTimestamp": 1536774347375,
      "updateTimestamp": 1536787095800
    },
    {
      "branchAU": "0000112",
      "featureName": "VM_VERSION",
      "featureDefaultNumber": 1840,
      "entryTimestamp": 1536952260452,
      "updateTimestamp": 1536952260452
    },
    {
      "branchAU": "0011539",
      "featureName": "VM_VERSION",
      "featureDefaultNumber": 1830,
      "entryTimestamp": 1534451816548,
      "updateTimestamp": 1534451816548
    },
    {
      "branchAU": "0000018",
      "featureName": "VM_VERSION",
      "featureDefaultNumber": 1830,
      "entryTimestamp": 1536179887273,
      "updateTimestamp": 1536179887273
    },
    {
      "branchAU": "0000147",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141395562,
      "updateTimestamp": 1509141395562
    },
    {
      "branchAU": "0000147",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2018-07-30",
      "entryTimestamp": 1509141395636,
      "updateTimestamp": 1509141395636
    },
    {
      "branchAU": "0006959",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141395691,
      "updateTimestamp": 1509141395691
    },
    {
      "branchAU": "0006959",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141395698,
      "updateTimestamp": 1509141395698
    },
    {
      "branchAU": "0000122",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141395719,
      "updateTimestamp": 1509141395719
    },
    {
      "branchAU": "0000122",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141395723,
      "updateTimestamp": 1509141395723
    },
    {
      "branchAU": "0006858",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141395739,
      "updateTimestamp": 1509141395739
    },
    {
      "branchAU": "0006858",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141395752,
      "updateTimestamp": 1509141395752
    },
    {
      "branchAU": "0008001",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141395795,
      "updateTimestamp": 1509141395795
    },
    {
      "branchAU": "0008001",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141395801,
      "updateTimestamp": 1509141395801
    },
    {
      "branchAU": "0007944",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141395833,
      "updateTimestamp": 1509141395833
    },
    {
      "branchAU": "0007944",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141395842,
      "updateTimestamp": 1509141395842
    },
    {
      "branchAU": "0007805",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141395868,
      "updateTimestamp": 1509141395868
    },
    {
      "branchAU": "0007805",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141395872,
      "updateTimestamp": 1509141395872
    },
    {
      "branchAU": "0007773",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141395892,
      "updateTimestamp": 1509141395892
    },
    {
      "branchAU": "0007773",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141395896,
      "updateTimestamp": 1509141395896
    },
    {
      "branchAU": "0007682",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141395921,
      "updateTimestamp": 1509141395921
    },
    {
      "branchAU": "0007682",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141395925,
      "updateTimestamp": 1509141395925
    },
    {
      "branchAU": "0007681",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141395945,
      "updateTimestamp": 1509141395945
    },
    {
      "branchAU": "0007681",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141395953,
      "updateTimestamp": 1509141395953
    },
    {
      "branchAU": "0007676",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141395974,
      "updateTimestamp": 1509141395974
    },
    {
      "branchAU": "0007676",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141395982,
      "updateTimestamp": 1509141395982
    },
    {
      "branchAU": "0007656",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141395999,
      "updateTimestamp": 1509141395999
    },
    {
      "branchAU": "0007656",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141396003,
      "updateTimestamp": 1509141396003
    },
    {
      "branchAU": "0007533",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141396019,
      "updateTimestamp": 1509141396019
    },
    {
      "branchAU": "0007533",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141396023,
      "updateTimestamp": 1509141396023
    },
    {
      "branchAU": "0007325",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141396045,
      "updateTimestamp": 1509141396045
    },
    {
      "branchAU": "0007325",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141396049,
      "updateTimestamp": 1509141396049
    },
    {
      "branchAU": "0007324",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141396063,
      "updateTimestamp": 1509141396063
    },
    {
      "branchAU": "0007324",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141396069,
      "updateTimestamp": 1509141396069
    },
    {
      "branchAU": "0007299",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141396088,
      "updateTimestamp": 1509141396088
    },
    {
      "branchAU": "0007299",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141396092,
      "updateTimestamp": 1509141396092
    },
    {
      "branchAU": "0007226",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141396114,
      "updateTimestamp": 1509141396114
    },
    {
      "branchAU": "0007226",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141396118,
      "updateTimestamp": 1509141396118
    },
    {
      "branchAU": "0007220",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141396130,
      "updateTimestamp": 1509141396130
    },
    {
      "branchAU": "0007220",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141396135,
      "updateTimestamp": 1509141396135
    },
    {
      "branchAU": "0007202",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141396162,
      "updateTimestamp": 1509141396162
    },
    {
      "branchAU": "0007202",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141396166,
      "updateTimestamp": 1509141396166
    },
    {
      "branchAU": "0007186",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141396180,
      "updateTimestamp": 1509141396180
    },
    {
      "branchAU": "0007186",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-26",
      "entryTimestamp": 1509141396184,
      "updateTimestamp": 1509141396184
    },
    {
      "branchAU": "0007151",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141396198,
      "updateTimestamp": 1509141396198
    },
    {
      "branchAU": "0007151",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-26",
      "entryTimestamp": 1509141396202,
      "updateTimestamp": 1509141396202
    },
    {
      "branchAU": "0007142",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141396219,
      "updateTimestamp": 1509141396219
    },
    {
      "branchAU": "0007142",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141396227,
      "updateTimestamp": 1509141396227
    },
    {
      "branchAU": "0007094",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141396243,
      "updateTimestamp": 1509141396243
    },
    {
      "branchAU": "0007094",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141396248,
      "updateTimestamp": 1509141396248
    },
    {
      "branchAU": "0007090",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141396265,
      "updateTimestamp": 1509141396265
    },
    {
      "branchAU": "0007090",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141396268,
      "updateTimestamp": 1509141396268
    },
    {
      "branchAU": "0007089",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141396282,
      "updateTimestamp": 1509141396282
    },
    {
      "branchAU": "0007089",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141396289,
      "updateTimestamp": 1509141396289
    },
    {
      "branchAU": "0007088",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141396311,
      "updateTimestamp": 1509141396311
    },
    {
      "branchAU": "0007088",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141396315,
      "updateTimestamp": 1509141396315
    },
    {
      "branchAU": "0007087",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141396325,
      "updateTimestamp": 1509141396325
    },
    {
      "branchAU": "0007087",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141396328,
      "updateTimestamp": 1509141396328
    },
    {
      "branchAU": "0007086",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141396337,
      "updateTimestamp": 1509141396337
    },
    {
      "branchAU": "0007086",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141396340,
      "updateTimestamp": 1509141396340
    },
    {
      "branchAU": "0007085",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509141396350,
      "updateTimestamp": 1509141396350
    },
    {
      "branchAU": "0007085",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509141396354,
      "updateTimestamp": 1509141396354
    },
    {
      "branchAU": "0017086",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509398653382,
      "updateTimestamp": 1509398653382
    },
    {
      "branchAU": "0017086",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509398653480,
      "updateTimestamp": 1509398653480
    },
    {
      "branchAU": "0017085",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509398653568,
      "updateTimestamp": 1509398653568
    },
    {
      "branchAU": "0017085",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-10-27",
      "entryTimestamp": 1509398653585,
      "updateTimestamp": 1509398653585
    },
    {
      "branchAU": "0066230",
      "featureName": "ONE_INTERFACE.ACTIVATION_DATE",
      "featureDefaultChar": "2018-07-03",
      "entryTimestamp": 1532741466000,
      "updateTimestamp": 1532741466000
    },
    {
      "branchAU": "0066230",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2018-07-03",
      "entryTimestamp": 1532741474000,
      "updateTimestamp": 1532741474000
    },
    {
      "branchAU": "0000",
      "featureName": "1intf",
      "featureDefaultChar": "test2",
      "entryTimestamp": 1536773402046,
      "updateTimestamp": 1536773955744
    },
    {
      "branchAU": "00006",
      "featureName": "1intf",
      "featureDefaultChar": "test2",
      "entryTimestamp": 1536774067766,
      "updateTimestamp": 1536774068520
    },
    {
      "branchAU": "0000100",
      "featureName": "WFA_VERSION",
      "featureDefaultNumber": 1830,
      "entryTimestamp": 1503953839525,
      "updateTimestamp": 1503953839525
    },
    {
      "branchAU": "0000978",
      "featureName": "ONE_INTERFACE",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1508963556288,
      "updateTimestamp": 1508963556288
    },
    {
      "branchAU": "0000915",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509044389180,
      "updateTimestamp": 1509044389180
    },
    {
      "branchAU": "0000915",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-09-12",
      "entryTimestamp": 1509044389310,
      "updateTimestamp": 1509044389310
    },
    {
      "branchAU": "0000905",
      "featureName": "MANAGER_VIEW",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1509053787595,
      "updateTimestamp": 1509053787595
    },
    {
      "branchAU": "0000905",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2017-09-20",
      "entryTimestamp": 1509053787725,
      "updateTimestamp": 1509053787725
    },
    {
      "branchAU": "0000978",
      "featureName": "ONE_INTERFACE.ACTIVATION_DATE",
      "featureDefaultChar": "2018-07-30",
      "entryTimestamp": 1532727437000,
      "updateTimestamp": 1532727437000
    },
    {
      "branchAU": "0001426",
      "featureName": "ONE_INTERFACE.ACTIVATION_DATE",
      "featureDefaultChar": "2018-07-29",
      "entryTimestamp": 1532727540000,
      "updateTimestamp": 1532727540000
    },
    {
      "branchAU": "0065779",
      "featureName": "ONE_INTERFACE.ACTIVATION_DATE",
      "featureDefaultChar": "2018-07-29",
      "entryTimestamp": 1532727592000,
      "updateTimestamp": 1532727592000
    },
    {
      "branchAU": "0007052",
      "featureName": "ONE_INTERFACE.ACTIVATION_DATE",
      "featureDefaultChar": "2018-07-29",
      "entryTimestamp": 1532727647000,
      "updateTimestamp": 1532727647000
    },
    {
      "branchAU": "0006813",
      "featureName": "ONE_INTERFACE.ACTIVATION_DATE",
      "featureDefaultChar": "2018-07-29",
      "entryTimestamp": 1532727662000,
      "updateTimestamp": 1532727662000
    },
    {
      "branchAU": "0006738",
      "featureName": "ONE_INTERFACE.ACTIVATION_DATE",
      "featureDefaultChar": "2018-07-29",
      "entryTimestamp": 1532727707000,
      "updateTimestamp": 1532727707000
    },
    {
      "branchAU": "0003111",
      "featureName": "ONE_INTERFACE.ACTIVATION_DATE",
      "featureDefaultChar": "2018-07-29",
      "entryTimestamp": 1532727790000,
      "updateTimestamp": 1532727790000
    },
    {
      "branchAU": "0003111",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2018-07-29",
      "entryTimestamp": 1532728647000,
      "updateTimestamp": 1532728647000
    },
    {
      "branchAU": "0006738",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2018-07-29",
      "entryTimestamp": 1532728682000,
      "updateTimestamp": 1532728682000
    },
    {
      "branchAU": "0001426",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2018-07-29",
      "entryTimestamp": 1532728714000,
      "updateTimestamp": 1532728714000
    },
    {
      "branchAU": "0065779",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2018-07-29",
      "entryTimestamp": 1532728731000,
      "updateTimestamp": 1532728731000
    },
    {
      "branchAU": "0007052",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2018-07-29",
      "entryTimestamp": 1532728747000,
      "updateTimestamp": 1532728747000
    },
    {
      "branchAU": "0006813",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2018-07-29",
      "entryTimestamp": 1532728761000,
      "updateTimestamp": 1532728761000
    },
    {
      "branchAU": "68233",
      "featureName": "ONE_INTERFACE.ACTIVATION_DATE",
      "featureDefaultChar": "2018-08-17",
      "entryTimestamp": 1534543082000,
      "updateTimestamp": 1534543082000
    },
    {
      "branchAU": "68233",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2018-08-17",
      "entryTimestamp": 1534543082000,
      "updateTimestamp": 1534543082000
    },
    {
      "branchAU": "691",
      "featureName": "ONE_INTERFACE.ACTIVATION_DATE",
      "featureDefaultChar": "2018-08-17",
      "entryTimestamp": 1534543082000,
      "updateTimestamp": 1534543082000
    },
    {
      "branchAU": "691",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2018-08-17",
      "entryTimestamp": 1534543082000,
      "updateTimestamp": 1534543082000
    },
    {
      "branchAU": "959",
      "featureName": "ONE_INTERFACE.ACTIVATION_DATE",
      "featureDefaultChar": "2018-08-17",
      "entryTimestamp": 1534543082000,
      "updateTimestamp": 1534543082000
    },
    {
      "branchAU": "0000910",
      "featureName": "STAGE_DIRECTOR",
      "featureDefaultChar": "YES",
      "entryTimestamp": 1508967543050,
      "updateTimestamp": 1508967543050
    },
    {
      "branchAU": "0000910",
      "featureName": "STAGE_DIRECTOR.ACTIVATION_DATE",
      "featureDefaultChar": "2017-09-01",
      "entryTimestamp": 1508967543175,
      "updateTimestamp": 1508967543175
    },
    {
      "branchAU": "0068233",
      "featureName": "ONE_INTERFACE.ACTIVATION_DATE",
      "featureDefaultChar": "2018-08-18",
      "entryTimestamp": 1534543082000,
      "updateTimestamp": 1534543082000
    },
    {
      "branchAU": "959",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2018-08-17",
      "entryTimestamp": 1534543082000,
      "updateTimestamp": 1534543082000
    },
    {
      "branchAU": "0068233",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2018-08-18",
      "entryTimestamp": 1534543082000,
      "updateTimestamp": 1534543082000
    },
    {
      "branchAU": "0000691",
      "featureName": "ONE_INTERFACE.ACTIVATION_DATE",
      "featureDefaultChar": "2018-08-18",
      "entryTimestamp": 1534543082000,
      "updateTimestamp": 1534543082000
    },
    {
      "branchAU": "0000691",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2018-08-18",
      "entryTimestamp": 1534543082000,
      "updateTimestamp": 1534543082000
    },
    {
      "branchAU": "0000959",
      "featureName": "ONE_INTERFACE.ACTIVATION_DATE",
      "featureDefaultChar": "2018-08-18",
      "entryTimestamp": 1534543082000,
      "updateTimestamp": 1534543082000
    },
    {
      "branchAU": "0000959",
      "featureName": "MANAGER_VIEW.ACTIVATION_DATE",
      "featureDefaultChar": "2018-08-18",
      "entryTimestamp": 1534543082000,
      "updateTimestamp": 1534543082000
    },
    {
      "branchAU": "00007",
      "featureName": "1intf778",
      "featureDefaultChar": "test78",
      "entryTimestamp": 1536787201860,
      "updateTimestamp": 1536787201860
    }
  ]
  adminFeatureDropdown: any = [];
  branchAUDropdown: any = [];
  adminBranchConfigValues: any;
  selectedRow = {
    "branchAU": "",
    "featureName": "",
    "featureDefaultChar": "",
    "entryTimestamp": "",
    "updateTimestamp": ""
  }


  constructor(private AdminService: AdminService) {

  }
  sort(type) {
    console.log(type)
    if (type === 'branchAU') {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      this.branchConfig = _.orderBy(this.branchConfig, [`${type}`], [`${this.sortDirection}`]);
    } else if (type === 'featureName') {
      this.sortDirectionFeature = this.sortDirectionFeature === 'asc' ? 'desc' : 'asc';
      this.branchConfig = _.orderBy(this.branchConfig, [`${type}`], [`${this.sortDirectionFeature}`]);
    } else {
      this.sortDirectionActivation = this.sortDirectionActivation === 'asc' ? 'desc' : 'asc';
      this.branchConfig = _.orderBy(this.branchConfig, [`${type}`], [`${this.sortDirectionActivation}`]);
    }

    // Use Lodash to sort array by 'name'
  }
  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  handleFeature(event) {
    this.selectedAdminFeatureDropdownValue = event.value.length && event.value[0].type;
  }
  handleBranch(event) {
    this.selectedAdminBranchDropdownValue = event.value.length && event.value[0].type;
  }

  handleSearch(data) {
    if (this.selectedAdminFeatureDropdownValue && data) {
      this.branchConfig = this.adminBranchConfigValues.filter((val, index) => val.featureName === this.selectedAdminFeatureDropdownValue && val.branchAU.indexOf(data) > -1)
    } else if (this.selectedAdminFeatureDropdownValue && !data) {
      this.branchConfig = this.adminBranchConfigValues.filter((val, index) => val.featureName === this.selectedAdminFeatureDropdownValue)
    } else if (!this.selectedAdminFeatureDropdownValue && data) {
      this.branchConfig = this.adminBranchConfigValues.filter((val, index) => val.branchAU.indexOf(data) > -1)
    } else {
      this.branchConfig = this.adminBranchConfigValues;
    }

  }
  saveChanges(data) {
    this.branchConfig[this.selectedIndex] = data;
  }

  displayForm(value: string) {
    this.showButton = false;
    value === 'admin' ? this.adminView = true : this.managerView = true;
  }
  exit() {
    this.showButton = true;
    this.adminView = false;
    this.managerView = false;
  }


  handleEdit(data, index: number) {
    this.selectedIndex = index;
    this.selectedRow = data;
    // this.selectedRow.featureName = data.featureName;
    // this.selectedRow.branchAU = data.branchAU;
    // this.selectedRow.entryTimestamp = data.entryTimestamp;
    // this.selectedRow.featureDefaultChar = data.featureDefaultChar;
    // this.selectedRow.updateTimestamp = data.updateTimestamp;
  }

  selectChangeHandler(selected: any) {
    this.navigationItems.branchConfigs = this.tableData.filter((data, value) => data.appName === selected);
    this.selectedData = this.formData[this.selectedType]
  }
  selectedValue() {
    this.selectedData = this.formData[this.selectedType]
  }
  ngOnInit() {
    this.formData = this.AdminService.getData();
    this.selectedData = this.formData['oneInterface'];
    this.selectAdminDropdown = this.AdminService.selectGroup;
    this.adminBranchConfigValues = this.branchConfig.slice();
    this.navigationItems =
      {
        "address": {
          "lineList": ["9454 MAIN ST"],
          "city": "PLYMOUTH",
          "zipCode": "95669",
          "stateCode": "CA"
        },
        "branchConfigs": [
          {
            "appName": "ONE_INTERFACE",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": "assets/images/home.png",
              "displayName": "HOME",
              "displayOrder": "1",
              "DEACTIVATION_DATE": "2100-08-01",
              "url": "https://na.ist.atmhost.wellsfargo.com:11459/oneinterface/index.html?storeau={param_storeAU}&computername={param_computerName}",
              "textKey": "APP_HOME",
              "fullScreen": "true",
              "external": "false",
              "functionId": "1UI",
              "sticky": "true",
              "iconColor": "#B06224",
              "ACTIVATION_DATE": "2017-08-01",
              "id": "4ec4b0f9-4717-4d71-8f55-c46039272412",
              "category": "user"
            }
          },
          {
            "appName": "NOTIFICATION",
            "appVersion": 1820,
            "properties": {
              "clientId": "6d6b5fd9b3e34a8a947fb7eb38fac9a7",
              "websocket": "wss://na.ist.atmhost.wellsfargo.com:11459/oneinterface/websocket/hub",
              "lantern": "https://dsgdevapp.wellsfargo.com/sa/bts/lantern/?m=98&p={param_id}",
              "token": "https://dsgdevapp.wellsfargo.com/sa/bts/swts/token"
            }
          },
          {
            "appName": "VAULT_MANAGER",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "Vault Manager",
              "displayOrder": "4",
              "DEACTIVATION_DATE": "2100-08-01",
              "url": "https://na.ist.atmhost.wellsfargo.com:11453/VaultManager/index.html?storeau={param_storeAU}&computername={param_computerName}",
              "textKey": "APP_VAULT_MANAGER",
              "fullScreen": "true",
              "external": "false",
              "functionId": "VLTMGR",
              "sticky": "true",
              "iconColor": "#007337",
              "ACTIVATION_DATE": "2017-08-01",
              "id": "004a5d42-4c38-43ba-bd40-797b31bc9303",
              "category": "user"
            }
          },
          {
            "appName": "MANAGER_VIEW",
            "appVersion": 1740,
            "properties": {
              "iconHeight": "1.25em",
              "iconImage": " ",
              "iconWidth": "1.25em",
              "displayName": "Manager View",
              "displayOrder": "5",
              "DEACTIVATION_DATE": "2100-11-01",
              "url": "https://na.ist.atmhost.wellsfargo.com:11463/managerview/index.html?storeau={param_storeAU}&computername={param_computerName}",
              "fullScreen": "true",
              "textKey": "APP_MANAGER_VIEW",
              "functionId": "MV",
              "external": "false",
              "iconColor": "#574537",
              "sticky": "false",
              "ACTIVATION_DATE": "2017-09-01",
              "id": "F7846370-BBEB-40A7-B319-55AE771D8B2D",
              "category": "user"
            }
          },
          {
            "appName": "CLOUDCORDS_SCHEDULER",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "Cloudcords",
              "displayOrder": "54",
              "url": "https://csfedportal.wellsfargo.net/affwebservices/public/saml2sso?SPID=cloudcords",
              "textKey": "APP_CLOUDCORDS_SCHEDULER",
              "fullScreen": "false",
              "external": "true",
              "functionId": "_OPEN_",
              "iconColor": "#679FC0",
              "sticky": "false",
              "id": "5899cc88-69d5-453e-be8d-60ccb1522b57",
              "category": "enterprise"
            }
          },
          {
            "appName": "TROUBLESHOOTING_GUIDE",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "Troubleshooting Guide",
              "displayOrder": "56",
              "url": "http://dssgweb.wellsfargo.com/wbcd/portal/store_equipment_help/documents/StoreTechnologyIssuesResolutionStatus.pdf",
              "textKey": "APP_TROUBLESHOOTING_GUIDE",
              "fullScreen": "false",
              "external": "true",
              "functionId": "_OPEN_",
              "iconColor": "#6F5091",
              "sticky": "false",
              "id": "dfc0e7f6-c577-45d6-999b-61a82c645eb2",
              "category": "enterprise"
            }
          },
          {
            "appName": "ATM_ASSIST_PORTAL",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "WF Assist",
              "displayOrder": "3",
              "DEACTIVATION_DATE": "2100-08-01",
              "url": "https://da-site1-atmassistportal.wellsfargo.com/AtmAssistPortal/index.html?storeau={param_storeAU}&computername={param_computerName}",
              "textKey": "APP_WF_ASSIST",
              "fullScreen": "true",
              "external": "false",
              "functionId": "WFASST",
              "sticky": "true",
              "iconColor": "#00698C",
              "ACTIVATION_DATE": "2017-08-01",
              "id": "7f0b8fc5-f5d8-4593-ba3e-962fdcf50516",
              "category": "user"
            }
          },
          {
            "appName": "BRANCH_PORTAL",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "Branch Portal",
              "displayOrder": "52",
              "url": "https://storeportal-az.wellsfargo.com/portal/site/RetailStorePortal",
              "textKey": "APP_BRANCH_PORTAL",
              "fullScreen": "false",
              "external": "true",
              "functionId": "_OPEN_",
              "iconColor": "#7A6855",
              "sticky": "false",
              "id": "2a7463eb-2ef0-4f22-9c09-6c4475182a4f",
              "category": "enterprise"
            }
          },
          {
            "appName": "BRANCH_EQUIPMENT_HELP",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "Branch Equipment",
              "displayOrder": "55",
              "url": "http://dssgweb.wellsfargo.com/wbcd/portal/store_equipment_help/index.html",
              "textKey": "APP_BRANCH_EQUIPMENT_HELP",
              "fullScreen": "false",
              "external": "true",
              "functionId": "_OPEN_",
              "iconColor": "#285C4D",
              "sticky": "false",
              "id": "7bff149c-29fe-480e-a513-624711a6ef13",
              "category": "enterprise"
            }
          },
          {
            "appName": "SVP",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "SVP",
              "displayOrder": "51",
              "url": "https://iat.salesandservice.wellsfargo.com:13170/",
              "textKey": "APP_SVP",
              "fullScreen": "false",
              "external": "true",
              "functionId": "_OPEN_",
              "iconColor": "#BB0826",
              "sticky": "false",
              "id": "57b1de7d-fd6e-45e4-aa37-ae69e11ea748",
              "category": "enterprise"
            }
          },
          {
            "appName": "STAGE_DIRECTOR",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "Stage Director",
              "displayOrder": "2",
              "DEACTIVATION_DATE": "2100-08-01",
              "url": "https://na.ist.atmhost.wellsfargo.com:11458/stagedirector/index.html?storeau={param_storeAU}&computername={param_computerName}",
              "textKey": "APP_STAGE_DIRECTOR",
              "fullScreen": "true",
              "external": "false",
              "functionId": "STGDIR",
              "sticky": "false",
              "iconColor": "#B06224",
              "ACTIVATION_DATE": "2017-08-01",
              "id": "3066648f-babb-4871-b41b-3ad3e8ba539b",
              "category": "user"
            }
          },
          {
            "appName": "BRANCH_PROFILE",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "Branch Profile",
              "displayOrder": "53",
              "url": "https://dssgapps.wellsfargo.com/aspx/storeprofile/",
              "textKey": "APP_BRANCH_PROFILE",
              "fullScreen": "false",
              "external": "true",
              "functionId": "_OPEN_",
              "iconColor": "#7A6855",
              "sticky": "false",
              "id": "2501c44c-c6e0-4bfc-91d4-85518bb1e095",
              "category": "enterprise"
            }
          }
        ]
      }
    this.adminFeatureDropdown = [
      { type: 'MANAGER_VIEW' },
      { type: 'MANAGER_VIEW.ACTIVATION_DATE' },
      { type: 'ONE_INTERFACE.ACTIVATION_DATE' },
      { type: 'ONE_INTERFACE' }
    ]
    //this.adminFeatureDropdown = _.uniqBy(this.branchConfig.map((value, index) => ({ "type": value.featureName })), 'type');
    this.branchAUDropdown = _.uniqBy(this.branchConfig.map((value, index) => ({ "type": value.branchAU })), 'type');
    console.log(this.branchAUDropdown);
    this.tableData = this.navigationItems.branchConfigs.slice();

    this.dropdownOptions = this.navigationItems.branchConfigs.map((val, index) => ({ "appName": val.appName }))

  }

}

