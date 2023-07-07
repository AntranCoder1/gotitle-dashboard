import Sequelize, { DataTypes, Model, Optional } from "sequelize";
import type { bought_titles, bought_titlesId } from "./bought_titles";
import type { connect_accounts, connect_accountsId } from "./connect_accounts";
import type { invoices, invoicesId } from "./invoices";
import type { notifications, notificationsId } from "./notifications";
import type { order_items, order_itemsId } from "./order_items";
import type { orders, ordersId } from "./orders";
import type { payment, paymentId } from "./payment";
import type { profiles, profilesId } from "./profiles";
import type { role_user_lists, role_user_listsId } from "./role_user_lists";
import type { roles, rolesId } from "./roles";
import type { search_jobs, search_jobsId } from "./search_jobs";
import type { subscriptions, subscriptionsId } from "./subscriptions";
import type { title_rating, title_ratingId } from "./title_rating";
import type { title_works, title_worksId } from "./title_works";
import type { titles, titlesId } from "./titles";
import type { user_settings, user_settingsId } from "./user_settings";

export interface user_listsAttributes {
  id: number;
  name: string;
  email: string;
  last_login?: Date;
  last_active?: Date;
  profile_image?: string;
  email_notifications_active?: number;
  password: string;
  remember_token?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  stripe_id?: string;
  card_brand?: string;
  card_last_four?: string;
  trial_ends_at?: string;
  profile_id?: number;
  user_setting_id?: number;
  last_name: string;
  cloud_storage: number;
  isAdmin: number;
}

export type user_listsPk = "id";
export type user_listsId = user_lists[user_listsPk];
export type user_listsCreationAttributes = Optional<
  user_listsAttributes,
  user_listsPk
>;

export class user_lists
  extends Model<user_listsAttributes, user_listsCreationAttributes>
  implements user_listsAttributes
{
  id!: number;
  name!: string;
  email!: string;
  last_login?: Date;
  last_active?: Date;
  profile_image?: string;
  email_notifications_active?: number;
  password!: string;
  remember_token?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  stripe_id?: string;
  card_brand?: string;
  card_last_four?: string;
  trial_ends_at?: string;
  profile_id?: number;
  user_setting_id?: number;
  last_name!: string;
  cloud_storage!: number;
  isAdmin!: number;

  // user_lists belongsTo profiles via profile_id
  profile!: profiles;
  getProfile!: Sequelize.BelongsToGetAssociationMixin<profiles>;
  setProfile!: Sequelize.BelongsToSetAssociationMixin<profiles, profilesId>;
  createProfile!: Sequelize.BelongsToCreateAssociationMixin<profiles>;
  // user_lists hasMany bought_titles via owner_list_id
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
  // user_lists hasMany connect_accounts via user_list_id
  connect_accounts!: connect_accounts[];
  getConnect_accounts!: Sequelize.HasManyGetAssociationsMixin<connect_accounts>;
  setConnect_accounts!: Sequelize.HasManySetAssociationsMixin<
    connect_accounts,
    connect_accountsId
  >;
  addConnect_account!: Sequelize.HasManyAddAssociationMixin<
    connect_accounts,
    connect_accountsId
  >;
  addConnect_accounts!: Sequelize.HasManyAddAssociationsMixin<
    connect_accounts,
    connect_accountsId
  >;
  createConnect_account!: Sequelize.HasManyCreateAssociationMixin<connect_accounts>;
  removeConnect_account!: Sequelize.HasManyRemoveAssociationMixin<
    connect_accounts,
    connect_accountsId
  >;
  removeConnect_accounts!: Sequelize.HasManyRemoveAssociationsMixin<
    connect_accounts,
    connect_accountsId
  >;
  hasConnect_account!: Sequelize.HasManyHasAssociationMixin<
    connect_accounts,
    connect_accountsId
  >;
  hasConnect_accounts!: Sequelize.HasManyHasAssociationsMixin<
    connect_accounts,
    connect_accountsId
  >;
  countConnect_accounts!: Sequelize.HasManyCountAssociationsMixin;
  // user_lists hasMany invoices via user_list_id
  invoices!: invoices[];
  getInvoices!: Sequelize.HasManyGetAssociationsMixin<invoices>;
  setInvoices!: Sequelize.HasManySetAssociationsMixin<invoices, invoicesId>;
  addInvoice!: Sequelize.HasManyAddAssociationMixin<invoices, invoicesId>;
  addInvoices!: Sequelize.HasManyAddAssociationsMixin<invoices, invoicesId>;
  createInvoice!: Sequelize.HasManyCreateAssociationMixin<invoices>;
  removeInvoice!: Sequelize.HasManyRemoveAssociationMixin<invoices, invoicesId>;
  removeInvoices!: Sequelize.HasManyRemoveAssociationsMixin<
    invoices,
    invoicesId
  >;
  hasInvoice!: Sequelize.HasManyHasAssociationMixin<invoices, invoicesId>;
  hasInvoices!: Sequelize.HasManyHasAssociationsMixin<invoices, invoicesId>;
  countInvoices!: Sequelize.HasManyCountAssociationsMixin;
  // user_lists hasMany notifications via user_list_id
  notifications!: notifications[];
  getNotifications!: Sequelize.HasManyGetAssociationsMixin<notifications>;
  setNotifications!: Sequelize.HasManySetAssociationsMixin<
    notifications,
    notificationsId
  >;
  addNotification!: Sequelize.HasManyAddAssociationMixin<
    notifications,
    notificationsId
  >;
  addNotifications!: Sequelize.HasManyAddAssociationsMixin<
    notifications,
    notificationsId
  >;
  createNotification!: Sequelize.HasManyCreateAssociationMixin<notifications>;
  removeNotification!: Sequelize.HasManyRemoveAssociationMixin<
    notifications,
    notificationsId
  >;
  removeNotifications!: Sequelize.HasManyRemoveAssociationsMixin<
    notifications,
    notificationsId
  >;
  hasNotification!: Sequelize.HasManyHasAssociationMixin<
    notifications,
    notificationsId
  >;
  hasNotifications!: Sequelize.HasManyHasAssociationsMixin<
    notifications,
    notificationsId
  >;
  countNotifications!: Sequelize.HasManyCountAssociationsMixin;
  // user_lists hasMany order_items via beneficiary_list_id
  order_items!: order_items[];
  getOrder_items!: Sequelize.HasManyGetAssociationsMixin<order_items>;
  setOrder_items!: Sequelize.HasManySetAssociationsMixin<
    order_items,
    order_itemsId
  >;
  addOrder_item!: Sequelize.HasManyAddAssociationMixin<
    order_items,
    order_itemsId
  >;
  addOrder_items!: Sequelize.HasManyAddAssociationsMixin<
    order_items,
    order_itemsId
  >;
  createOrder_item!: Sequelize.HasManyCreateAssociationMixin<order_items>;
  removeOrder_item!: Sequelize.HasManyRemoveAssociationMixin<
    order_items,
    order_itemsId
  >;
  removeOrder_items!: Sequelize.HasManyRemoveAssociationsMixin<
    order_items,
    order_itemsId
  >;
  hasOrder_item!: Sequelize.HasManyHasAssociationMixin<
    order_items,
    order_itemsId
  >;
  hasOrder_items!: Sequelize.HasManyHasAssociationsMixin<
    order_items,
    order_itemsId
  >;
  countOrder_items!: Sequelize.HasManyCountAssociationsMixin;
  // user_lists hasMany orders via customer_list_id
  orders!: orders[];
  getOrders!: Sequelize.HasManyGetAssociationsMixin<orders>;
  setOrders!: Sequelize.HasManySetAssociationsMixin<orders, ordersId>;
  addOrder!: Sequelize.HasManyAddAssociationMixin<orders, ordersId>;
  addOrders!: Sequelize.HasManyAddAssociationsMixin<orders, ordersId>;
  createOrder!: Sequelize.HasManyCreateAssociationMixin<orders>;
  removeOrder!: Sequelize.HasManyRemoveAssociationMixin<orders, ordersId>;
  removeOrders!: Sequelize.HasManyRemoveAssociationsMixin<orders, ordersId>;
  hasOrder!: Sequelize.HasManyHasAssociationMixin<orders, ordersId>;
  hasOrders!: Sequelize.HasManyHasAssociationsMixin<orders, ordersId>;
  countOrders!: Sequelize.HasManyCountAssociationsMixin;
  // user_lists hasMany payment via recipient_list_id
  payments!: payment[];
  getPayments!: Sequelize.HasManyGetAssociationsMixin<payment>;
  setPayments!: Sequelize.HasManySetAssociationsMixin<payment, paymentId>;
  addPayment!: Sequelize.HasManyAddAssociationMixin<payment, paymentId>;
  addPayments!: Sequelize.HasManyAddAssociationsMixin<payment, paymentId>;
  createPayment!: Sequelize.HasManyCreateAssociationMixin<payment>;
  removePayment!: Sequelize.HasManyRemoveAssociationMixin<payment, paymentId>;
  removePayments!: Sequelize.HasManyRemoveAssociationsMixin<payment, paymentId>;
  hasPayment!: Sequelize.HasManyHasAssociationMixin<payment, paymentId>;
  hasPayments!: Sequelize.HasManyHasAssociationsMixin<payment, paymentId>;
  countPayments!: Sequelize.HasManyCountAssociationsMixin;
  // user_lists hasMany role_user_lists via user_list_id
  role_user_lists!: role_user_lists[];
  getRole_user_lists!: Sequelize.HasManyGetAssociationsMixin<role_user_lists>;
  setRole_user_lists!: Sequelize.HasManySetAssociationsMixin<
    role_user_lists,
    role_user_listsId
  >;
  addRole_user_list!: Sequelize.HasManyAddAssociationMixin<
    role_user_lists,
    role_user_listsId
  >;
  addRole_user_lists!: Sequelize.HasManyAddAssociationsMixin<
    role_user_lists,
    role_user_listsId
  >;
  createRole_user_list!: Sequelize.HasManyCreateAssociationMixin<role_user_lists>;
  removeRole_user_list!: Sequelize.HasManyRemoveAssociationMixin<
    role_user_lists,
    role_user_listsId
  >;
  removeRole_user_lists!: Sequelize.HasManyRemoveAssociationsMixin<
    role_user_lists,
    role_user_listsId
  >;
  hasRole_user_list!: Sequelize.HasManyHasAssociationMixin<
    role_user_lists,
    role_user_listsId
  >;
  hasRole_user_lists!: Sequelize.HasManyHasAssociationsMixin<
    role_user_lists,
    role_user_listsId
  >;
  countRole_user_lists!: Sequelize.HasManyCountAssociationsMixin;
  // user_lists belongsToMany roles via user_list_id and role_id
  roles!: roles[];
  getRoles!: Sequelize.BelongsToManyGetAssociationsMixin<roles>;
  setRoles!: Sequelize.BelongsToManySetAssociationsMixin<roles, rolesId>;
  addRole!: Sequelize.BelongsToManyAddAssociationMixin<roles, rolesId>;
  addRoles!: Sequelize.BelongsToManyAddAssociationsMixin<roles, rolesId>;
  createRole!: Sequelize.BelongsToManyCreateAssociationMixin<roles>;
  removeRole!: Sequelize.BelongsToManyRemoveAssociationMixin<roles, rolesId>;
  removeRoles!: Sequelize.BelongsToManyRemoveAssociationsMixin<roles, rolesId>;
  hasRole!: Sequelize.BelongsToManyHasAssociationMixin<roles, rolesId>;
  hasRoles!: Sequelize.BelongsToManyHasAssociationsMixin<roles, rolesId>;
  countRoles!: Sequelize.BelongsToManyCountAssociationsMixin;
  // user_lists hasMany search_jobs via claimant_list_id
  search_jobs!: search_jobs[];
  getSearch_jobs!: Sequelize.HasManyGetAssociationsMixin<search_jobs>;
  setSearch_jobs!: Sequelize.HasManySetAssociationsMixin<
    search_jobs,
    search_jobsId
  >;
  addSearch_job!: Sequelize.HasManyAddAssociationMixin<
    search_jobs,
    search_jobsId
  >;
  addSearch_jobs!: Sequelize.HasManyAddAssociationsMixin<
    search_jobs,
    search_jobsId
  >;
  createSearch_job!: Sequelize.HasManyCreateAssociationMixin<search_jobs>;
  removeSearch_job!: Sequelize.HasManyRemoveAssociationMixin<
    search_jobs,
    search_jobsId
  >;
  removeSearch_jobs!: Sequelize.HasManyRemoveAssociationsMixin<
    search_jobs,
    search_jobsId
  >;
  hasSearch_job!: Sequelize.HasManyHasAssociationMixin<
    search_jobs,
    search_jobsId
  >;
  hasSearch_jobs!: Sequelize.HasManyHasAssociationsMixin<
    search_jobs,
    search_jobsId
  >;
  countSearch_jobs!: Sequelize.HasManyCountAssociationsMixin;
  // user_lists hasMany search_jobs via assigned_user_list_id
  assigned_user_list_search_jobs!: search_jobs[];
  getAssigned_user_list_search_jobs!: Sequelize.HasManyGetAssociationsMixin<search_jobs>;
  setAssigned_user_list_search_jobs!: Sequelize.HasManySetAssociationsMixin<
    search_jobs,
    search_jobsId
  >;
  addAssigned_user_list_search_job!: Sequelize.HasManyAddAssociationMixin<
    search_jobs,
    search_jobsId
  >;
  addAssigned_user_list_search_jobs!: Sequelize.HasManyAddAssociationsMixin<
    search_jobs,
    search_jobsId
  >;
  createAssigned_user_list_search_job!: Sequelize.HasManyCreateAssociationMixin<search_jobs>;
  removeAssigned_user_list_search_job!: Sequelize.HasManyRemoveAssociationMixin<
    search_jobs,
    search_jobsId
  >;
  removeAssigned_user_list_search_jobs!: Sequelize.HasManyRemoveAssociationsMixin<
    search_jobs,
    search_jobsId
  >;
  hasAssigned_user_list_search_job!: Sequelize.HasManyHasAssociationMixin<
    search_jobs,
    search_jobsId
  >;
  hasAssigned_user_list_search_jobs!: Sequelize.HasManyHasAssociationsMixin<
    search_jobs,
    search_jobsId
  >;
  countAssigned_user_list_search_jobs!: Sequelize.HasManyCountAssociationsMixin;
  // user_lists hasMany subscriptions via user_list_id
  subscriptions!: subscriptions[];
  getSubscriptions!: Sequelize.HasManyGetAssociationsMixin<subscriptions>;
  setSubscriptions!: Sequelize.HasManySetAssociationsMixin<
    subscriptions,
    subscriptionsId
  >;
  addSubscription!: Sequelize.HasManyAddAssociationMixin<
    subscriptions,
    subscriptionsId
  >;
  addSubscriptions!: Sequelize.HasManyAddAssociationsMixin<
    subscriptions,
    subscriptionsId
  >;
  createSubscription!: Sequelize.HasManyCreateAssociationMixin<subscriptions>;
  removeSubscription!: Sequelize.HasManyRemoveAssociationMixin<
    subscriptions,
    subscriptionsId
  >;
  removeSubscriptions!: Sequelize.HasManyRemoveAssociationsMixin<
    subscriptions,
    subscriptionsId
  >;
  hasSubscription!: Sequelize.HasManyHasAssociationMixin<
    subscriptions,
    subscriptionsId
  >;
  hasSubscriptions!: Sequelize.HasManyHasAssociationsMixin<
    subscriptions,
    subscriptionsId
  >;
  countSubscriptions!: Sequelize.HasManyCountAssociationsMixin;
  // user_lists hasMany title_rating via owner_list_id
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
  // user_lists hasMany title_works via user_list_created
  title_works!: title_works[];
  getTitle_works!: Sequelize.HasManyGetAssociationsMixin<title_works>;
  setTitle_works!: Sequelize.HasManySetAssociationsMixin<
    title_works,
    title_worksId
  >;
  addTitle_work!: Sequelize.HasManyAddAssociationMixin<
    title_works,
    title_worksId
  >;
  addTitle_works!: Sequelize.HasManyAddAssociationsMixin<
    title_works,
    title_worksId
  >;
  createTitle_work!: Sequelize.HasManyCreateAssociationMixin<title_works>;
  removeTitle_work!: Sequelize.HasManyRemoveAssociationMixin<
    title_works,
    title_worksId
  >;
  removeTitle_works!: Sequelize.HasManyRemoveAssociationsMixin<
    title_works,
    title_worksId
  >;
  hasTitle_work!: Sequelize.HasManyHasAssociationMixin<
    title_works,
    title_worksId
  >;
  hasTitle_works!: Sequelize.HasManyHasAssociationsMixin<
    title_works,
    title_worksId
  >;
  countTitle_works!: Sequelize.HasManyCountAssociationsMixin;
  // user_lists hasMany titles via owner_list_id
  titles!: titles[];
  getTitles!: Sequelize.HasManyGetAssociationsMixin<titles>;
  setTitles!: Sequelize.HasManySetAssociationsMixin<titles, titlesId>;
  addTitle!: Sequelize.HasManyAddAssociationMixin<titles, titlesId>;
  addTitles!: Sequelize.HasManyAddAssociationsMixin<titles, titlesId>;
  createTitle!: Sequelize.HasManyCreateAssociationMixin<titles>;
  removeTitle!: Sequelize.HasManyRemoveAssociationMixin<titles, titlesId>;
  removeTitles!: Sequelize.HasManyRemoveAssociationsMixin<titles, titlesId>;
  hasTitle!: Sequelize.HasManyHasAssociationMixin<titles, titlesId>;
  hasTitles!: Sequelize.HasManyHasAssociationsMixin<titles, titlesId>;
  countTitles!: Sequelize.HasManyCountAssociationsMixin;
  // user_lists belongsTo user_settings via user_setting_id
  user_setting!: user_settings;
  getUser_setting!: Sequelize.BelongsToGetAssociationMixin<user_settings>;
  setUser_setting!: Sequelize.BelongsToSetAssociationMixin<
    user_settings,
    user_settingsId
  >;
  createUser_setting!: Sequelize.BelongsToCreateAssociationMixin<user_settings>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_lists {
    user_lists.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        last_login: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        last_active: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        profile_image: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        email_notifications_active: {
          type: DataTypes.TINYINT,
          allowNull: true,
          defaultValue: 1,
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        remember_token: {
          type: DataTypes.STRING(255),
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
        deleted_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        stripe_id: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        card_brand: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        card_last_four: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        trial_ends_at: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        profile_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "profiles",
            key: "id",
          },
          unique: "FK_1483A5E9CCFA12B9",
        },
        user_setting_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "user_settings",
            key: "id",
          },
          unique: "FK_1483A5E949528B9E",
        },
        last_name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        cloud_storage: {
          type: DataTypes.DOUBLE,
          allowNull: false,
          defaultValue: 0,
        },
        isAdmin: {
          type: DataTypes.TINYINT,
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        tableName: "user_lists",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
          {
            name: "UNIQ_1483A5E9CCFA12B9",
            unique: true,
            using: "BTREE",
            fields: [{ name: "profile_id" }],
          },
          {
            name: "UNIQ_1483A5E949528B9E",
            unique: true,
            using: "BTREE",
            fields: [{ name: "user_setting_id" }],
          },
        ],
      }
    );
    return user_lists;
  }
}
