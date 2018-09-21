import {Injectable} from '@angular/core';

@Injectable()

export class AdminService{

    constructor(){

    }
    selectGroup:any = [
      {type: 'group1'},
      {type: 'group2'},
      {type: 'group3'},
      {type: 'group4'},
      {type: 'group5'},
      {type: 'group6'},
      {type: 'group7'}

    ]
    formData: any = {
        'oneInterface': [
          { releaseIdentifier: 1801, property: 'ID', value: 'OI', edit: '', save: '' },
          { releaseIdentifier: 1802, property: 'color', value: 'Blue', edit: '', save: '' },
          { releaseIdentifier: 1803, property: 'Icon Height', value: '1.25em', edit: '', save: '' },
          { releaseIdentifier: 1804, property: 'IconWidth', value: '1.25em', edit: '', save: '' },
          { releaseIdentifier: 1805, property: 'Sticky', value: 'True', edit: '', save: '' },
          { releaseIdentifier: 1806, property: 'Full Screen', value: 'True', edit: '', save: '' },
          { releaseIdentifier: 1807, property: 'Activation Date', value: '01/01/2016', edit: '', save: '' },
          { releaseIdentifier: 1808, property: 'Deactivation Date', value: '01/01/2019', edit: '', save: '' }
        ],
        'managerView': [
          { releaseIdentifier: 1901, property: 'ID', value: 'OI', edit: '', save: '' },
          { releaseIdentifier: 1902, property: 'color', value: 'Red', edit: '', save: '' },
          { releaseIdentifier: 1903, property: 'Icon Height', value: '1.35em', edit: '', save: '' },
          { releaseIdentifier: 1904, property: 'IconWidth', value: '1.55em', edit: '', save: '' },
          { releaseIdentifier: 1905, property: 'Sticky', value: 'False', edit: '', save: '' },
          { releaseIdentifier: 1906, property: 'Full Screen', value: 'True', edit: '', save: '' },
          { releaseIdentifier: 1907, property: 'Activation Date', value: '05/01/2016', edit: '', save: '' },
          { releaseIdentifier: 1908, property: 'Deactivation Date', value: '06/01/2019', edit: '', save: '' }
        ]
    
      }
      getData(){
          return this.formData;
      }
}