import { MatPaginator, Sort } from '@angular/material';

export class Pagination {
  API_EVENT = {
    ACTIVE: 1,
    INACTIVE: 0,
    DELETED: 'DELETED',
  };

  RECOMMENDED = {
    RECOMMENDED: true,
    NOT_RECOMMENDED: false
  };

  POPULAR = {
    POPULAR: true,
    NOT_POPULAR: false
  };

  today: Date = new Date();
  total: number;
  page: number;
  limit: number;
  search: string;
  pageOptions: number[];
  filterOptions: { [key: string]: string | any };
  sort;
  sortKey: string;
  sortType: number;
  type: string;
  startTime: any;
  endTime: any;
  statusType: string;

  constructor() {
    this.total = 0;
    this.page = 1;
    this.limit = 10;
    this.pageOptions = [5, 10, 25, 100];
  }

  get pageParams() {
    return {
      page: this.page,
      limit: this.limit
    };
  }

  get searchFilter() {
    return { search: this.search };
  }

  get sortHeaders() {
    let key = this.sortKey;
    let obj = {}
    if (key) {
        obj['sort'] = JSON.stringify({ [this.sortKey]: this.sortType })
    }
    // console.log()
    return obj;
  }

  get typeOf() {
    return {
      type: this.type,
      status: this.statusType
    };
  }

  confirmPageReload() { }

  allPrams() {
    return {
      ...this.typeOf,
      ...this.pageParams,
      ...this.filterOptions,
      ...this.searchFilter,
      ...this.sortHeaders,
    };
  }

  normalParams() {
    return {
      ...this.typeOf,
      ...this.pageParams,
      ...this.filterOptions,
      ...this.searchFilter,
    };
  }

  /**
   * @description This function checks if page needs to be decreased on row deletion
   */
  validateDeletion() {
    if (
      this.total !== 1 &&
      this.total - (this.page - 1) * this.limit === 1
    ) {
      this.page--;
      this.total--;
    }
  }

  get validPageOptions() {
    const dataObj = this.allPrams();
    const mainOption = {};
    for (const i of Object.keys(dataObj)) {
      if (dataObj[i] || dataObj[i] === 0) {
        mainOption[i] = dataObj[i];
      }
    }
    return mainOption;
  }

  get validParams() {
    const dataObj = this.normalParams();
    const mainOption = {};
    for (const i of Object.keys(dataObj)) {
      if (dataObj[i] || dataObj[i] === 0) {
        mainOption[i] = dataObj[i];
      }
    }
    return mainOption;
  }

  set pageOptionsOnChange(options: MatPaginator) {
    this.page = options.pageIndex + 1;
    this.limit = options.pageSize;
  }

  set sortOptions(sortOption: Sort) {
    if (sortOption.direction) {
        this.sortKey = sortOption.active;
        this.sortType = sortOption.direction === 'asc' ? (1) : (-1);
    } else {
        this.sortKey = null;
        this.sortType = null;
    }
}

  currentIndex(index: number): number {
    return (this.page - 1) * this.limit + index + 1;
  }

  resetPages() {
    this.page = 1;
  }

}