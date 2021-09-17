export default class ProductsModel {
  filters = {
    search: '',
    category: 'all',
    sortCriteria: '',
  }

  filterBySearch() {
    if(this.filters.search === ''){
      return {};
    }

    return {
    'name_like': this.filters.search,
    };
  }

  filterByCategory() {
    if(this.filters.category === 'all') {
      return {};
    }

    return {
      category: this.filters.category,
    }
  }

  sortByPrice() {
    if(this.filters.sortCriteria === 'select') {
      return {};
    }

    return {
      '_sort': 'price',
      '_order': this.filters.sortCriteria,
    }
  }

  buildFilters() {
    const filterBySearch = this.filterBySearch();
    const filterByCategory = this.filterByCategory();
    const sortCriteria = this.sortByPrice();

    return new URLSearchParams({
      ...filterBySearch,
      ...filterByCategory,
      ...sortCriteria,
    }).toString();
  }
}
