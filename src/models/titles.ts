import Sequelize, { DataTypes, Model, Optional } from "sequelize";
import type { bought_titles, bought_titlesId } from "./bought_titles";
import type { covenants, covenantsId } from "./covenants";
import type { customer, customerId } from "./customer";
import type { deed, deedId } from "./deed";
import type { document, documentId } from "./document";
import type { easements, easementsId } from "./easements";
import type { invoices, invoicesId } from "./invoices";
import type { liens, liensId } from "./liens";
import type { locations, locationsId } from "./locations";
import type {
  misc_civil_probates,
  misc_civil_probatesId,
} from "./misc_civil_probates";
import type { mortgages, mortgagesId } from "./mortgages";
import type { plat_floor_plans, plat_floor_plansId } from "./plat_floor_plans";
import type { search_jobs, search_jobsId } from "./search_jobs";
import type { tax, taxId } from "./tax";
import type { title_book_page, title_book_pageId } from "./title_book_page";
import type { title_buyers, title_buyersId } from "./title_buyers";
import type {
  title_detail,
  title_detailCreationAttributes,
  title_detailId,
} from "./title_detail";
import type { title_rating, title_ratingId } from "./title_rating";
import type { title_sellers, title_sellersId } from "./title_sellers";
import type {
  title_works,
  title_worksCreationAttributes,
  title_worksId,
} from "./title_works";
import type { users, usersId } from "./users";

export interface titlesAttributes {
  id: number;
  date_search?: string;
  price?: number;
  documents?: string;
  created_at: Date;
  updated_at: Date;
  location_id?: number;
  owner_id?: number;
  sales_count?: number;
  date_effective?: string;
  district?: string;
  gmd?: string;
  land_lot?: string;
  section?: string;
  type?: string;
  lot?: string;
  block?: string;
  phase?: string;
  pod?: string;
  unit?: string;
  long_legal?: string;
  plat_list?: string;
  zones?: string;
  note?: string;
  township?: string;
  title_range?: string;
  status: string;
  last_title_step?: string;
  apartment?: string;
  search_type?: string;
  search_type_detail?: string;
  search_type_detail_value?: string;
  condo_name?: string;
  subdivision_section?: string;
  interest_common?: string;
  parking?: string;
  garage?: string;
  storage?: string;
  wine?: string;
  floor_plan_list?: string;
  chain_title_type?: string;
  certified_by_user: number;
  search_job_id?: number;
  source?: string;
  current_owner_deed_id?: number;
  legal_address?: string;
  customer_id?: number;
  invoice_id?: number;
  office_order_id?: number;
  office_user_id?: number;
  email_created?: string;
  archived: number;
  use_custom_stack: number;
  report_template?: number;
}

export type titlesPk = "id";
export type titlesId = titles[titlesPk];
export type titlesCreationAttributes = Optional<titlesAttributes, titlesPk>;

export class titles
  extends Model<titlesAttributes, titlesCreationAttributes>
  implements titlesAttributes
{
  id!: number;
  date_search?: string;
  price?: number;
  documents?: string;
  created_at!: Date;
  updated_at!: Date;
  location_id?: number;
  owner_id?: number;
  sales_count?: number;
  date_effective?: string;
  district?: string;
  gmd?: string;
  land_lot?: string;
  section?: string;
  type?: string;
  lot?: string;
  block?: string;
  phase?: string;
  pod?: string;
  unit?: string;
  long_legal?: string;
  plat_list?: string;
  zones?: string;
  note?: string;
  township?: string;
  title_range?: string;
  status!: string;
  last_title_step?: string;
  apartment?: string;
  search_type?: string;
  search_type_detail?: string;
  search_type_detail_value?: string;
  condo_name?: string;
  subdivision_section?: string;
  interest_common?: string;
  parking?: string;
  garage?: string;
  storage?: string;
  wine?: string;
  floor_plan_list?: string;
  chain_title_type?: string;
  certified_by_user!: number;
  search_job_id?: number;
  source?: string;
  current_owner_deed_id?: number;
  legal_address?: string;
  customer_id?: number;
  invoice_id?: number;
  office_order_id?: number;
  office_user_id?: number;
  email_created?: string;
  archived!: number;
  use_custom_stack!: number;
  report_template?: number;

  // titles belongsTo customer via customer_id
  customer!: customer;
  getCustomer!: Sequelize.BelongsToGetAssociationMixin<customer>;
  setCustomer!: Sequelize.BelongsToSetAssociationMixin<customer, customerId>;
  createCustomer!: Sequelize.BelongsToCreateAssociationMixin<customer>;
  // titles belongsTo deed via current_owner_deed_id
  current_owner_deed!: deed;
  getCurrent_owner_deed!: Sequelize.BelongsToGetAssociationMixin<deed>;
  setCurrent_owner_deed!: Sequelize.BelongsToSetAssociationMixin<deed, deedId>;
  createCurrent_owner_deed!: Sequelize.BelongsToCreateAssociationMixin<deed>;
  // titles belongsTo invoices via invoice_id
  invoice!: invoices;
  getInvoice!: Sequelize.BelongsToGetAssociationMixin<invoices>;
  setInvoice!: Sequelize.BelongsToSetAssociationMixin<invoices, invoicesId>;
  createInvoice!: Sequelize.BelongsToCreateAssociationMixin<invoices>;
  // titles belongsTo locations via location_id
  location!: locations;
  getLocation!: Sequelize.BelongsToGetAssociationMixin<locations>;
  setLocation!: Sequelize.BelongsToSetAssociationMixin<locations, locationsId>;
  createLocation!: Sequelize.BelongsToCreateAssociationMixin<locations>;
  // titles belongsTo search_jobs via search_job_id
  search_job!: search_jobs;
  getSearch_job!: Sequelize.BelongsToGetAssociationMixin<search_jobs>;
  setSearch_job!: Sequelize.BelongsToSetAssociationMixin<
    search_jobs,
    search_jobsId
  >;
  createSearch_job!: Sequelize.BelongsToCreateAssociationMixin<search_jobs>;
  // titles hasMany bought_titles via title_id
  bought_titles!: bought_titles[];
  getBought_titles!: Sequelize.HasManyGetAssociationsMixin<bought_titles>;
  setBought_titles!: Sequelize.HasManySetAssociationsMixin<
    bought_titles,
    bought_titlesId
  >;
  addBought_title!: Sequelize.HasManyAddAssociationMixin<
    bought_titles,
    bought_titlesId
  >;
  addBought_titles!: Sequelize.HasManyAddAssociationsMixin<
    bought_titles,
    bought_titlesId
  >;
  createBought_title!: Sequelize.HasManyCreateAssociationMixin<bought_titles>;
  removeBought_title!: Sequelize.HasManyRemoveAssociationMixin<
    bought_titles,
    bought_titlesId
  >;
  removeBought_titles!: Sequelize.HasManyRemoveAssociationsMixin<
    bought_titles,
    bought_titlesId
  >;
  hasBought_title!: Sequelize.HasManyHasAssociationMixin<
    bought_titles,
    bought_titlesId
  >;
  hasBought_titles!: Sequelize.HasManyHasAssociationsMixin<
    bought_titles,
    bought_titlesId
  >;
  countBought_titles!: Sequelize.HasManyCountAssociationsMixin;
  // titles hasMany covenants via title_id
  covenants!: covenants[];
  getCovenants!: Sequelize.HasManyGetAssociationsMixin<covenants>;
  setCovenants!: Sequelize.HasManySetAssociationsMixin<covenants, covenantsId>;
  addCovenant!: Sequelize.HasManyAddAssociationMixin<covenants, covenantsId>;
  addCovenants!: Sequelize.HasManyAddAssociationsMixin<covenants, covenantsId>;
  createCovenant!: Sequelize.HasManyCreateAssociationMixin<covenants>;
  removeCovenant!: Sequelize.HasManyRemoveAssociationMixin<
    covenants,
    covenantsId
  >;
  removeCovenants!: Sequelize.HasManyRemoveAssociationsMixin<
    covenants,
    covenantsId
  >;
  hasCovenant!: Sequelize.HasManyHasAssociationMixin<covenants, covenantsId>;
  hasCovenants!: Sequelize.HasManyHasAssociationsMixin<covenants, covenantsId>;
  countCovenants!: Sequelize.HasManyCountAssociationsMixin;
  // titles hasMany deed via title_id
  deeds!: deed[];
  getDeeds!: Sequelize.HasManyGetAssociationsMixin<deed>;
  setDeeds!: Sequelize.HasManySetAssociationsMixin<deed, deedId>;
  addDeed!: Sequelize.HasManyAddAssociationMixin<deed, deedId>;
  addDeeds!: Sequelize.HasManyAddAssociationsMixin<deed, deedId>;
  createDeed!: Sequelize.HasManyCreateAssociationMixin<deed>;
  removeDeed!: Sequelize.HasManyRemoveAssociationMixin<deed, deedId>;
  removeDeeds!: Sequelize.HasManyRemoveAssociationsMixin<deed, deedId>;
  hasDeed!: Sequelize.HasManyHasAssociationMixin<deed, deedId>;
  hasDeeds!: Sequelize.HasManyHasAssociationsMixin<deed, deedId>;
  countDeeds!: Sequelize.HasManyCountAssociationsMixin;
  // titles hasMany document via title_id
  document!: document[];
  getDocuments!: Sequelize.HasManyGetAssociationsMixin<document>;
  setDocuments!: Sequelize.HasManySetAssociationsMixin<document, documentId>;
  addDocument!: Sequelize.HasManyAddAssociationMixin<document, documentId>;
  addDocuments!: Sequelize.HasManyAddAssociationsMixin<document, documentId>;
  createDocument!: Sequelize.HasManyCreateAssociationMixin<document>;
  removeDocument!: Sequelize.HasManyRemoveAssociationMixin<
    document,
    documentId
  >;
  removeDocuments!: Sequelize.HasManyRemoveAssociationsMixin<
    document,
    documentId
  >;
  hasDocument!: Sequelize.HasManyHasAssociationMixin<document, documentId>;
  hasDocuments!: Sequelize.HasManyHasAssociationsMixin<document, documentId>;
  countDocuments!: Sequelize.HasManyCountAssociationsMixin;
  // titles hasMany easements via title_id
  easements!: easements[];
  getEasements!: Sequelize.HasManyGetAssociationsMixin<easements>;
  setEasements!: Sequelize.HasManySetAssociationsMixin<easements, easementsId>;
  addEasement!: Sequelize.HasManyAddAssociationMixin<easements, easementsId>;
  addEasements!: Sequelize.HasManyAddAssociationsMixin<easements, easementsId>;
  createEasement!: Sequelize.HasManyCreateAssociationMixin<easements>;
  removeEasement!: Sequelize.HasManyRemoveAssociationMixin<
    easements,
    easementsId
  >;
  removeEasements!: Sequelize.HasManyRemoveAssociationsMixin<
    easements,
    easementsId
  >;
  hasEasement!: Sequelize.HasManyHasAssociationMixin<easements, easementsId>;
  hasEasements!: Sequelize.HasManyHasAssociationsMixin<easements, easementsId>;
  countEasements!: Sequelize.HasManyCountAssociationsMixin;
  // titles hasMany liens via title_id
  liens!: liens[];
  getLiens!: Sequelize.HasManyGetAssociationsMixin<liens>;
  setLiens!: Sequelize.HasManySetAssociationsMixin<liens, liensId>;
  addLien!: Sequelize.HasManyAddAssociationMixin<liens, liensId>;
  addLiens!: Sequelize.HasManyAddAssociationsMixin<liens, liensId>;
  createLien!: Sequelize.HasManyCreateAssociationMixin<liens>;
  removeLien!: Sequelize.HasManyRemoveAssociationMixin<liens, liensId>;
  removeLiens!: Sequelize.HasManyRemoveAssociationsMixin<liens, liensId>;
  hasLien!: Sequelize.HasManyHasAssociationMixin<liens, liensId>;
  hasLiens!: Sequelize.HasManyHasAssociationsMixin<liens, liensId>;
  countLiens!: Sequelize.HasManyCountAssociationsMixin;
  // titles hasMany misc_civil_probates via title_id
  misc_civil_probates!: misc_civil_probates[];
  getMisc_civil_probates!: Sequelize.HasManyGetAssociationsMixin<misc_civil_probates>;
  setMisc_civil_probates!: Sequelize.HasManySetAssociationsMixin<
    misc_civil_probates,
    misc_civil_probatesId
  >;
  addMisc_civil_probate!: Sequelize.HasManyAddAssociationMixin<
    misc_civil_probates,
    misc_civil_probatesId
  >;
  addMisc_civil_probates!: Sequelize.HasManyAddAssociationsMixin<
    misc_civil_probates,
    misc_civil_probatesId
  >;
  createMisc_civil_probate!: Sequelize.HasManyCreateAssociationMixin<misc_civil_probates>;
  removeMisc_civil_probate!: Sequelize.HasManyRemoveAssociationMixin<
    misc_civil_probates,
    misc_civil_probatesId
  >;
  removeMisc_civil_probates!: Sequelize.HasManyRemoveAssociationsMixin<
    misc_civil_probates,
    misc_civil_probatesId
  >;
  hasMisc_civil_probate!: Sequelize.HasManyHasAssociationMixin<
    misc_civil_probates,
    misc_civil_probatesId
  >;
  hasMisc_civil_probates!: Sequelize.HasManyHasAssociationsMixin<
    misc_civil_probates,
    misc_civil_probatesId
  >;
  countMisc_civil_probates!: Sequelize.HasManyCountAssociationsMixin;
  // titles hasMany mortgages via title_id
  mortgages!: mortgages[];
  getMortgages!: Sequelize.HasManyGetAssociationsMixin<mortgages>;
  setMortgages!: Sequelize.HasManySetAssociationsMixin<mortgages, mortgagesId>;
  addMortgage!: Sequelize.HasManyAddAssociationMixin<mortgages, mortgagesId>;
  addMortgages!: Sequelize.HasManyAddAssociationsMixin<mortgages, mortgagesId>;
  createMortgage!: Sequelize.HasManyCreateAssociationMixin<mortgages>;
  removeMortgage!: Sequelize.HasManyRemoveAssociationMixin<
    mortgages,
    mortgagesId
  >;
  removeMortgages!: Sequelize.HasManyRemoveAssociationsMixin<
    mortgages,
    mortgagesId
  >;
  hasMortgage!: Sequelize.HasManyHasAssociationMixin<mortgages, mortgagesId>;
  hasMortgages!: Sequelize.HasManyHasAssociationsMixin<mortgages, mortgagesId>;
  countMortgages!: Sequelize.HasManyCountAssociationsMixin;
  // titles hasMany plat_floor_plans via title_id
  plat_floor_plans!: plat_floor_plans[];
  getPlat_floor_plans!: Sequelize.HasManyGetAssociationsMixin<plat_floor_plans>;
  setPlat_floor_plans!: Sequelize.HasManySetAssociationsMixin<
    plat_floor_plans,
    plat_floor_plansId
  >;
  addPlat_floor_plan!: Sequelize.HasManyAddAssociationMixin<
    plat_floor_plans,
    plat_floor_plansId
  >;
  addPlat_floor_plans!: Sequelize.HasManyAddAssociationsMixin<
    plat_floor_plans,
    plat_floor_plansId
  >;
  createPlat_floor_plan!: Sequelize.HasManyCreateAssociationMixin<plat_floor_plans>;
  removePlat_floor_plan!: Sequelize.HasManyRemoveAssociationMixin<
    plat_floor_plans,
    plat_floor_plansId
  >;
  removePlat_floor_plans!: Sequelize.HasManyRemoveAssociationsMixin<
    plat_floor_plans,
    plat_floor_plansId
  >;
  hasPlat_floor_plan!: Sequelize.HasManyHasAssociationMixin<
    plat_floor_plans,
    plat_floor_plansId
  >;
  hasPlat_floor_plans!: Sequelize.HasManyHasAssociationsMixin<
    plat_floor_plans,
    plat_floor_plansId
  >;
  countPlat_floor_plans!: Sequelize.HasManyCountAssociationsMixin;
  // titles hasMany tax via title_id
  taxes!: tax[];
  getTaxes!: Sequelize.HasManyGetAssociationsMixin<tax>;
  setTaxes!: Sequelize.HasManySetAssociationsMixin<tax, taxId>;
  addTax!: Sequelize.HasManyAddAssociationMixin<tax, taxId>;
  addTaxes!: Sequelize.HasManyAddAssociationsMixin<tax, taxId>;
  createTax!: Sequelize.HasManyCreateAssociationMixin<tax>;
  removeTax!: Sequelize.HasManyRemoveAssociationMixin<tax, taxId>;
  removeTaxes!: Sequelize.HasManyRemoveAssociationsMixin<tax, taxId>;
  hasTax!: Sequelize.HasManyHasAssociationMixin<tax, taxId>;
  hasTaxes!: Sequelize.HasManyHasAssociationsMixin<tax, taxId>;
  countTaxes!: Sequelize.HasManyCountAssociationsMixin;
  // titles hasMany title_book_page via title_id
  title_book_pages!: title_book_page[];
  getTitle_book_pages!: Sequelize.HasManyGetAssociationsMixin<title_book_page>;
  setTitle_book_pages!: Sequelize.HasManySetAssociationsMixin<
    title_book_page,
    title_book_pageId
  >;
  addTitle_book_page!: Sequelize.HasManyAddAssociationMixin<
    title_book_page,
    title_book_pageId
  >;
  addTitle_book_pages!: Sequelize.HasManyAddAssociationsMixin<
    title_book_page,
    title_book_pageId
  >;
  createTitle_book_page!: Sequelize.HasManyCreateAssociationMixin<title_book_page>;
  removeTitle_book_page!: Sequelize.HasManyRemoveAssociationMixin<
    title_book_page,
    title_book_pageId
  >;
  removeTitle_book_pages!: Sequelize.HasManyRemoveAssociationsMixin<
    title_book_page,
    title_book_pageId
  >;
  hasTitle_book_page!: Sequelize.HasManyHasAssociationMixin<
    title_book_page,
    title_book_pageId
  >;
  hasTitle_book_pages!: Sequelize.HasManyHasAssociationsMixin<
    title_book_page,
    title_book_pageId
  >;
  countTitle_book_pages!: Sequelize.HasManyCountAssociationsMixin;
  // titles hasMany title_buyers via title_id
  title_buyers!: title_buyers[];
  getTitle_buyers!: Sequelize.HasManyGetAssociationsMixin<title_buyers>;
  setTitle_buyers!: Sequelize.HasManySetAssociationsMixin<
    title_buyers,
    title_buyersId
  >;
  addTitle_buyer!: Sequelize.HasManyAddAssociationMixin<
    title_buyers,
    title_buyersId
  >;
  addTitle_buyers!: Sequelize.HasManyAddAssociationsMixin<
    title_buyers,
    title_buyersId
  >;
  createTitle_buyer!: Sequelize.HasManyCreateAssociationMixin<title_buyers>;
  removeTitle_buyer!: Sequelize.HasManyRemoveAssociationMixin<
    title_buyers,
    title_buyersId
  >;
  removeTitle_buyers!: Sequelize.HasManyRemoveAssociationsMixin<
    title_buyers,
    title_buyersId
  >;
  hasTitle_buyer!: Sequelize.HasManyHasAssociationMixin<
    title_buyers,
    title_buyersId
  >;
  hasTitle_buyers!: Sequelize.HasManyHasAssociationsMixin<
    title_buyers,
    title_buyersId
  >;
  countTitle_buyers!: Sequelize.HasManyCountAssociationsMixin;
  // titles hasOne title_detail via title_id
  title_detail!: title_detail;
  getTitle_detail!: Sequelize.HasOneGetAssociationMixin<title_detail>;
  setTitle_detail!: Sequelize.HasOneSetAssociationMixin<
    title_detail,
    title_detailId
  >;
  // titles hasMany title_rating via title_id
  title_ratings!: title_rating[];
  getTitle_ratings!: Sequelize.HasManyGetAssociationsMixin<title_rating>;
  setTitle_ratings!: Sequelize.HasManySetAssociationsMixin<
    title_rating,
    title_ratingId
  >;
  addTitle_rating!: Sequelize.HasManyAddAssociationMixin<
    title_rating,
    title_ratingId
  >;
  addTitle_ratings!: Sequelize.HasManyAddAssociationsMixin<
    title_rating,
    title_ratingId
  >;
  createTitle_rating!: Sequelize.HasManyCreateAssociationMixin<title_rating>;
  removeTitle_rating!: Sequelize.HasManyRemoveAssociationMixin<
    title_rating,
    title_ratingId
  >;
  removeTitle_ratings!: Sequelize.HasManyRemoveAssociationsMixin<
    title_rating,
    title_ratingId
  >;
  hasTitle_rating!: Sequelize.HasManyHasAssociationMixin<
    title_rating,
    title_ratingId
  >;
  hasTitle_ratings!: Sequelize.HasManyHasAssociationsMixin<
    title_rating,
    title_ratingId
  >;
  countTitle_ratings!: Sequelize.HasManyCountAssociationsMixin;
  // titles hasMany title_sellers via title_id
  title_sellers!: title_sellers[];
  getTitle_sellers!: Sequelize.HasManyGetAssociationsMixin<title_sellers>;
  setTitle_sellers!: Sequelize.HasManySetAssociationsMixin<
    title_sellers,
    title_sellersId
  >;
  addTitle_seller!: Sequelize.HasManyAddAssociationMixin<
    title_sellers,
    title_sellersId
  >;
  addTitle_sellers!: Sequelize.HasManyAddAssociationsMixin<
    title_sellers,
    title_sellersId
  >;
  createTitle_seller!: Sequelize.HasManyCreateAssociationMixin<title_sellers>;
  removeTitle_seller!: Sequelize.HasManyRemoveAssociationMixin<
    title_sellers,
    title_sellersId
  >;
  removeTitle_sellers!: Sequelize.HasManyRemoveAssociationsMixin<
    title_sellers,
    title_sellersId
  >;
  hasTitle_seller!: Sequelize.HasManyHasAssociationMixin<
    title_sellers,
    title_sellersId
  >;
  hasTitle_sellers!: Sequelize.HasManyHasAssociationsMixin<
    title_sellers,
    title_sellersId
  >;
  countTitle_sellers!: Sequelize.HasManyCountAssociationsMixin;
  // titles hasOne title_works via title_id
  title_work!: title_works;
  getTitle_work!: Sequelize.HasOneGetAssociationMixin<title_works>;
  setTitle_work!: Sequelize.HasOneSetAssociationMixin<
    title_works,
    title_worksId
  >;
  // titles belongsTo users via owner_id
  owner!: users;
  getOwner!: Sequelize.BelongsToGetAssociationMixin<users>;
  setOwner!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createOwner!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof titles {
    titles.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        date_search: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        price: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        documents: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        location_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "locations",
            key: "id",
          },
          unique: "FK_C14541A364D218E",
        },
        owner_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "users",
            key: "id",
          },
        },
        sales_count: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        date_effective: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        district: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        gmd: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        land_lot: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        section: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        type: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        lot: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        block: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        phase: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        pod: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        unit: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        long_legal: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        plat_list: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        zones: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        note: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        township: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        title_range: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        status: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        last_title_step: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        apartment: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        search_type: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        search_type_detail: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        search_type_detail_value: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        condo_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        subdivision_section: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        interest_common: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        parking: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        garage: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        storage: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        wine: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        floor_plan_list: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        chain_title_type: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        certified_by_user: {
          type: DataTypes.TINYINT,
          allowNull: false,
          defaultValue: 0,
        },
        search_job_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "search_jobs",
            key: "id",
          },
          unique: "FK_C14541A3D20221B6",
        },
        source: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        current_owner_deed_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "deed",
            key: "id",
          },
        },
        legal_address: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        customer_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "customer",
            key: "id",
          },
        },
        invoice_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "invoices",
            key: "id",
          },
          unique: "FK_C14541A32989F1FD",
        },
        office_order_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        office_user_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        email_created: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        archived: {
          type: DataTypes.TINYINT,
          allowNull: false,
          defaultValue: 0,
        },
        use_custom_stack: {
          type: DataTypes.TINYINT,
          allowNull: false,
          defaultValue: 0,
        },
        report_template: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "titles",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
          {
            name: "UNIQ_C14541A364D218E",
            unique: true,
            using: "BTREE",
            fields: [{ name: "location_id" }],
          },
          {
            name: "UNIQ_C14541A3D20221B6",
            unique: true,
            using: "BTREE",
            fields: [{ name: "search_job_id" }],
          },
          {
            name: "UNIQ_C14541A32989F1FD",
            unique: true,
            using: "BTREE",
            fields: [{ name: "invoice_id" }],
          },
          {
            name: "IDX_C14541A37E3C61F9",
            using: "BTREE",
            fields: [{ name: "owner_id" }],
          },
          {
            name: "IDX_C14541A35BB29117",
            using: "BTREE",
            fields: [{ name: "current_owner_deed_id" }],
          },
          {
            name: "IDX_C14541A39395C3F3",
            using: "BTREE",
            fields: [{ name: "customer_id" }],
          },
        ],
      }
    );
    return titles;
  }
}
