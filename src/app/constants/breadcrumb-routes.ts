import * as route from 'src/app/constants/absolute-route';

// ADMIN MODULE

export const ADMIN_PROFILE = [{ path: route.ADMIN_PROFILE, label: 'Admin Profile' }];
export const ADMIN_EDIT = [
    ...ADMIN_PROFILE,
    { path: route.ADMIN_PROFILE_EDIT, label: 'Edit' },
];
export const ADMIN_CHANGE_PASSWORD = [
    ...ADMIN_PROFILE,
    { path: route.ADMIN_CHANGE_PASSWORD, label: 'Change Password' },
];

// CUSTOMER MODULE

export const B_CUSTOMERS = [{ path: route.CUSTOMERS, label: 'Customers' }];
export const CUSTOMERS_DETAILS = (id?: any) => [
    ...B_CUSTOMERS,
    { path: route.CUSTOMER_DETAILS + `/${id}`, label: 'Customer Details' }
];
export const CUSTOMERS_ORDER_DETAILS = (id?: any) => [
    ...CUSTOMERS_DETAILS(id),
    { path: route.ORDERS, label: 'Order Details' }
];


// MENUS MODULE

export const B_MENUS = (id) => [{ path: route.MENUS + `/${id}`, label: 'Menus' }];
export const MENUS_DETAILS = (id) => [
    ...B_MENUS(id),
    { path: '', label: 'Details' }
];
export const MENUS_DETAILS_EDIT = (id) => [
    ...B_MENUS(id),
    { path: '', label: 'Edit' }
];

export const MENU_RECOMMENDED = [{ path: route.RECOMMENDED, label: 'Recommended' }];

export const MENU_POPULAR = [{ path: route.POPULAR, label: 'Popular' }];


// RESTAURANT MODULE

export const B_RESTAURANT = [{ path: route.RESTAURANTS, label: 'Restaurant' }];

export const B_RESTAURANT_DETAILS = [
    ...B_RESTAURANT,
    { path: '', label: 'Details' }
];
export const B_RESTAURANT_EDIT = [
    ...B_RESTAURANT,
    { path: '', label: 'Edit' }
];
export const B_RESTAURANT_ADD = [
    ...B_RESTAURANT,
    { path: '', label: 'Add' }
];

// SETTINGS

export const B_SETTING = [{ path: route.SETTING, label: 'Setting' }];

// PAYMENTS MODULE


// RIDERS MODULE

export const B_RIDER = [{ path: route.RIDERS, label: 'Riders'}];

export const B_RIDER_EDIT = [
    ...B_RIDER,
    { path: '', label: 'Edit' }
];

export const B_RIDER_ADD = [
    ...B_RIDER,
    { path: '', label: 'Add' }
];

// BANNERS MODULE

export const B_BANNERS = [{ path: route.BANNERS, label: 'Banners'}];

// CATEGORIES

export const B_CATEGORIES = [{ path: route.CATEGORIES, label: 'Categories' }];


// ORDERS MODULE

export const B_ORDERS = [{ path: route.ORDERS, label: 'Orders'}];

export const B_ORDERS_EDIT = [
    ...B_ORDERS,
    { path: '', label: 'Edit' }
];

export const B_ORDERS_ADD = [
    ...B_ORDERS,
    { path: '', label: 'Add' }
];

// ORDERS MODULE

export const B_COUPONS = [{ path: route.COUPONS, label: 'Coupons'}];

// PAYMENT MODULE

export const B_PAYMENTS = [{ path: route.RESTAURANTS, label: 'Payment' }];

// REPORT MODULE

export const B_REPORT = [{ path: route.REPORTS, label: 'Reports'}];

