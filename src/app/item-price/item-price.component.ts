import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { ItemPriceModel } from '../models/item-price.model';
import { ItemPriceService } from '../services/item-price.service';

import { CategoryModel } from '../models/category.model';
import { SubCategoryModel } from '../models/subcategory.model';
import { QualityModel } from '../models/quality.model'
import { TierModel } from '../models/tier.model'
import { EnchantedModel } from '../models/enchanted.model'

import { ItemMenuService } from '../services/item-menu.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import * as moment from 'moment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ItemModel } from '../models/item.model';

@Component({
  selector: 'app-item-price',
  templateUrl: './item-price.component.html',
  styleUrls: ['./item-price.component.css'],
})
export class ItemPriceComponent implements OnInit, AfterViewInit {
  searchForm: FormGroup;
  titleAlert: string = 'This field is required';
  //search: '';

  items: ItemModel[];
  categories: CategoryModel[];
  subCategories: SubCategoryModel[];
  subCategoriesSelected: SubCategoryModel[];
  tiers: TierModel[];
  enchantments: EnchantedModel[];
  qualities: QualityModel[];
  

  itemList: ItemPriceModel[];
  item = '';
  categoryLevel = 'All';
  subCategoryLevel = 'All';
  tierLevel = 'all';
  enchantedLevel = 'all';
  qualityLevel = 'all';

  // searchInfo = {
  //   item: 'T7_BAG',
  //   category: '',
  //   subcategory: '',
  //   city: 'FortSterling',
  //   quality: 1,
  // };

  searchInfo = {
    item: 'T4_BAG',
    category: 'Acessories',
    subcategory: 'Bags',
    tier: '4',
    enchanted: '0',
    city: 'Caerleon,Lymhurst,Bridgewatch,Martlock,FortSterling',
    quality: '1',
  };

  data = {
    name: '',
  };

  /* mat-table structure */
  dataSource: MatTableDataSource<ItemPriceModel> = new MatTableDataSource([]);
  loading$ = new Subject<boolean>();

  displayedColumns: string[] = [
    'item_id',
    'city',
    'quality',
    'sell_price_min',
    'sellLastUpdated',
    'buy_price_max',
    'buyLastUpdated',
    'grossMargin',
    // 'sell_price_min_date',
    // 'buy_price_max_date',

    // 'sell_price_max',
    // 'sell_price_max_date',
    // 'buy_price_min',
    // 'buy_price_min_date',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.loading$.next(true);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;    
  }

  constructor(
    public itemPriceService: ItemPriceService,
    public itemMenuService: ItemMenuService,
    private formBuilder: FormBuilder,

    private httpService: HttpClient
  ) {}

  ngOnInit(): void {
    this.getMenu();
    this.createForm();
    this.getItemPrice(this.searchInfo);
  }

  createForm() {
    this.searchForm = this.formBuilder.group({
      item: [null, [Validators.required /*, Validators.minLength(5)*/]],
      category: [null, [Validators.required]],
      subcategory: [null, [Validators.required]],
      tier: [null, [Validators.required]],
      enchanted: [null, [Validators.required]],
      quality: [null, [Validators.required]],
      city: [null, [Validators.required]],
      
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      this.searchInfo.item = this.searchForm.value['item'];
      this.searchInfo.category = this.searchForm.value['category'];
      this.searchInfo.subcategory = this.searchForm.value['subcategory'];
      this.searchInfo.tier = this.searchForm.value['tier'];
      this.searchInfo.enchanted = this.searchForm.value['enchanted'];
      this.searchInfo.quality = this.searchForm.value['quality'];      
      this.searchInfo.city = this.searchForm.value['city'];
      

      this.getItemPrice(this.searchInfo);
    }
  }

  getMenu() {
    if (this.itemMenuService != null) {
      this.items = this.itemMenuService.getItemByAll();
      this.categories = this.itemMenuService.getCategoryByAll();
      this.subCategories = this.itemMenuService.getSubCategoryByAll();
      this.subCategoriesSelected = this.subCategories.filter((x: any) => x.category === 'All');      
      this.tiers = this.itemMenuService.getTierByAll();
      this.qualities = this.itemMenuService.getQualityByAll();
      this.enchantments = this.itemMenuService.getEnchantedByAll();
      
      // console.log(this.items.find(          
      //   x => x?.LocalizedNames?.['DE-DE'] === 'Tasche des Experten'
      //   ).UniqueName
      // );
    }
  }

  getItemPrice(searchInfo) {
    if (searchInfo != null && this.itemPriceService != null) {
      this.itemPriceService
        .getItemPriceBySearch(searchInfo)
        .pipe(finalize(() => this.loading$.next(false)))
        .subscribe((response) => {
          //console.log(response);
          this.itemList = response;
          this.dataSource.data = this.normalizeData(this.itemList);
        });
    }
  }

  categoryChanged(categoryName) {
    let dropDownData = this.subCategories.filter(
      (x: any) => x.category === categoryName
    );
    if (dropDownData) {
      this.subCategoriesSelected = dropDownData;
      if (categoryName === 'All') {
        this.subCategoryLevel = 'All';
        this.searchForm.controls.item.setValidators([Validators.required]);
        this.searchForm.controls.item.markAsUntouched();
        this.searchForm.controls.subcategory.clearValidators();     

      } else {
        this.subCategoryLevel = '';
        this.searchForm.controls.item.clearValidators();     
        this.searchForm.controls.subcategory.setValidators([Validators.required]);        
        this.searchForm.controls.subcategory.markAsUntouched();

      }
      this.searchForm.controls.item.updateValueAndValidity();     
      this.searchForm.controls.subcategory.updateValueAndValidity();
    }
  }

  resetSearch() {
    this.item = '';
    this.categoryLevel = 'All';
    this.subCategoriesSelected = this.subCategories.filter((x: any) => x.category === 'All');      
    this.subCategoryLevel = 'All';
    this.tierLevel = 'all';
    this.enchantedLevel = 'all';
    this.qualityLevel = 'all';
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  normalizeData(dataModel) {
    for (let item of dataModel) {
      item.grossMargin = item.buy_price_max - item.sell_price_min;

      if (item.sellLastUpdated === undefined) {
        item.sellLastUpdated = this.getHowLongAgo(item.sell_price_min_date);
      }

      if (item.buyLastUpdated === undefined) {
        item.buyLastUpdated = this.getHowLongAgo(item.buy_price_max_date);
      }
    }

    return dataModel;
  }

  getHowLongAgo(datetime) {
    var old: any;
    var now: any;
    var nowutc: any;
    var diff: any;
    var ms: any;
    var days: any;

    old = moment.utc(datetime);

    //console.log('OLD ' + old.format());

    now = moment();
    //console.log('NOW ' + now.format());

    nowutc = moment.utc(now);
    //console.log('NOW UTC' + nowutc.format());

    ms = moment(now, 'DD/MM/YYYY HH:mm:ss').diff(
      moment(old, 'DD/MM/YYYY HH:mm:ss')
    );
    days = moment.duration(ms);
    diff = moment
      .duration(Math.floor(days.asHours()) + moment.utc(ms).format(':mm:ss'))
      .humanize();
    //console.log(diff);

    return diff;
  }
}
