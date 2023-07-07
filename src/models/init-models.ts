import type { Sequelize, Model, ModelType } from "sequelize";
import { bought_titles } from "./bought_titles";
import type {
  bought_titlesAttributes,
  bought_titlesCreationAttributes,
} from "./bought_titles";
import { cloud_storage_setting } from "./cloud_storage_setting";
import type {
  cloud_storage_settingAttributes,
  cloud_storage_settingCreationAttributes,
} from "./cloud_storage_setting";
import { connect_accounts } from "./connect_accounts";
import type {
  connect_accountsAttributes,
  connect_accountsCreationAttributes,
} from "./connect_accounts";
import { covenants } from "./covenants";
import type {
  covenantsAttributes,
  covenantsCreationAttributes,
} from "./covenants";
import { covenants_db_images } from "./covenants_db_images";
import type {
  covenants_db_imagesAttributes,
  covenants_db_imagesCreationAttributes,
} from "./covenants_db_images";
import { customer } from "./customer";
import type {
  customerAttributes,
  customerCreationAttributes,
} from "./customer";
import { db_images } from "./db_images";
import type {
  db_imagesAttributes,
  db_imagesCreationAttributes,
} from "./db_images";
import { deed } from "./deed";
import type { deedAttributes, deedCreationAttributes } from "./deed";
import { deed_db_images } from "./deed_db_images";
import type {
  deed_db_imagesAttributes,
  deed_db_imagesCreationAttributes,
} from "./deed_db_images";
import { deed_types } from "./deed_types";
import type {
  deed_typesAttributes,
  deed_typesCreationAttributes,
} from "./deed_types";
import { document } from "./document";
import type {
  documentAttributes,
  documentCreationAttributes,
} from "./document";
import { easement_types } from "./easement_types";
import type {
  easement_typesAttributes,
  easement_typesCreationAttributes,
} from "./easement_types";
import { easements } from "./easements";
import type {
  easementsAttributes,
  easementsCreationAttributes,
} from "./easements";
import { easements_db_images } from "./easements_db_images";
import type {
  easements_db_imagesAttributes,
  easements_db_imagesCreationAttributes,
} from "./easements_db_images";
import { error_logs } from "./error_logs";
import type {
  error_logsAttributes,
  error_logsCreationAttributes,
} from "./error_logs";
import { fee_setting } from "./fee_setting";
import type {
  fee_settingAttributes,
  fee_settingCreationAttributes,
} from "./fee_setting";
import { guests } from "./guests";
import type { guestsAttributes, guestsCreationAttributes } from "./guests";
import { invoices } from "./invoices";
import type {
  invoicesAttributes,
  invoicesCreationAttributes,
} from "./invoices";
import { invoices_item } from "./invoices_item";
import type {
  invoices_itemAttributes,
  invoices_itemCreationAttributes,
} from "./invoices_item";
import { lien_types } from "./lien_types";
import type {
  lien_typesAttributes,
  lien_typesCreationAttributes,
} from "./lien_types";
import { liens } from "./liens";
import type { liensAttributes, liensCreationAttributes } from "./liens";
import { liens_db_images } from "./liens_db_images";
import type {
  liens_db_imagesAttributes,
  liens_db_imagesCreationAttributes,
} from "./liens_db_images";
import { locations } from "./locations";
import type {
  locationsAttributes,
  locationsCreationAttributes,
} from "./locations";
import { mass_payment } from "./mass_payment";
import type {
  mass_paymentAttributes,
  mass_paymentCreationAttributes,
} from "./mass_payment";
import { migrations } from "./migrations";
import type {
  migrationsAttributes,
  migrationsCreationAttributes,
} from "./migrations";
import { misc_civil_probates } from "./misc_civil_probates";
import type {
  misc_civil_probatesAttributes,
  misc_civil_probatesCreationAttributes,
} from "./misc_civil_probates";
import { misc_civil_probates_db_images } from "./misc_civil_probates_db_images";
import type {
  misc_civil_probates_db_imagesAttributes,
  misc_civil_probates_db_imagesCreationAttributes,
} from "./misc_civil_probates_db_images";
import { mortgages } from "./mortgages";
import type {
  mortgagesAttributes,
  mortgagesCreationAttributes,
} from "./mortgages";
import { mortgages_db_images } from "./mortgages_db_images";
import type {
  mortgages_db_imagesAttributes,
  mortgages_db_imagesCreationAttributes,
} from "./mortgages_db_images";
import { notifications } from "./notifications";
import type {
  notificationsAttributes,
  notificationsCreationAttributes,
} from "./notifications";
import { oauth_access_tokens } from "./oauth_access_tokens";
import type {
  oauth_access_tokensAttributes,
  oauth_access_tokensCreationAttributes,
} from "./oauth_access_tokens";
import { oauth_auth_codes } from "./oauth_auth_codes";
import type {
  oauth_auth_codesAttributes,
  oauth_auth_codesCreationAttributes,
} from "./oauth_auth_codes";
import { oauth_clients } from "./oauth_clients";
import type {
  oauth_clientsAttributes,
  oauth_clientsCreationAttributes,
} from "./oauth_clients";
import { oauth_personal_access_clients } from "./oauth_personal_access_clients";
import type {
  oauth_personal_access_clientsAttributes,
  oauth_personal_access_clientsCreationAttributes,
} from "./oauth_personal_access_clients";
import { oauth_refresh_tokens } from "./oauth_refresh_tokens";
import type {
  oauth_refresh_tokensAttributes,
  oauth_refresh_tokensCreationAttributes,
} from "./oauth_refresh_tokens";
import { order_items } from "./order_items";
import type {
  order_itemsAttributes,
  order_itemsCreationAttributes,
} from "./order_items";
import { orders } from "./orders";
import type { ordersAttributes, ordersCreationAttributes } from "./orders";
import { password_resets } from "./password_resets";
import type {
  password_resetsAttributes,
  password_resetsCreationAttributes,
} from "./password_resets";
import { payment } from "./payment";
import type { paymentAttributes, paymentCreationAttributes } from "./payment";
import { payment_event } from "./payment_event";
import type {
  payment_eventAttributes,
  payment_eventCreationAttributes,
} from "./payment_event";
import { payment_method } from "./payment_method";
import type {
  payment_methodAttributes,
  payment_methodCreationAttributes,
} from "./payment_method";
import { payment_method_type } from "./payment_method_type";
import type {
  payment_method_typeAttributes,
  payment_method_typeCreationAttributes,
} from "./payment_method_type";
import { payment_settings } from "./payment_settings";
import type {
  payment_settingsAttributes,
  payment_settingsCreationAttributes,
} from "./payment_settings";
import { permission_role } from "./permission_role";
import type {
  permission_roleAttributes,
  permission_roleCreationAttributes,
} from "./permission_role";
import { permissions } from "./permissions";
import type {
  permissionsAttributes,
  permissionsCreationAttributes,
} from "./permissions";
import { plat_floor_plans } from "./plat_floor_plans";
import type {
  plat_floor_plansAttributes,
  plat_floor_plansCreationAttributes,
} from "./plat_floor_plans";
import { plat_floor_plans_db_images } from "./plat_floor_plans_db_images";
import type {
  plat_floor_plans_db_imagesAttributes,
  plat_floor_plans_db_imagesCreationAttributes,
} from "./plat_floor_plans_db_images";
import { profiles } from "./profiles";
import type {
  profilesAttributes,
  profilesCreationAttributes,
} from "./profiles";
import { role_user } from "./role_user";
import type {
  role_userAttributes,
  role_userCreationAttributes,
} from "./role_user";
import { role_user_lists } from "./role_user_lists";
import type {
  role_user_listsAttributes,
  role_user_listsCreationAttributes,
} from "./role_user_lists";
import { roles } from "./roles";
import type { rolesAttributes, rolesCreationAttributes } from "./roles";
import { search_jobs } from "./search_jobs";
import type {
  search_jobsAttributes,
  search_jobsCreationAttributes,
} from "./search_jobs";
import { sessions } from "./sessions";
import type {
  sessionsAttributes,
  sessionsCreationAttributes,
} from "./sessions";
import { settings } from "./settings";
import type {
  settingsAttributes,
  settingsCreationAttributes,
} from "./settings";
import { subscriptions } from "./subscriptions";
import type {
  subscriptionsAttributes,
  subscriptionsCreationAttributes,
} from "./subscriptions";
import { tax } from "./tax";
import type { taxAttributes, taxCreationAttributes } from "./tax";
import { tax_db_images } from "./tax_db_images";
import type {
  tax_db_imagesAttributes,
  tax_db_imagesCreationAttributes,
} from "./tax_db_images";
import { title_book_page } from "./title_book_page";
import type {
  title_book_pageAttributes,
  title_book_pageCreationAttributes,
} from "./title_book_page";
import { title_buyers } from "./title_buyers";
import type {
  title_buyersAttributes,
  title_buyersCreationAttributes,
} from "./title_buyers";
import { title_detail } from "./title_detail";
import type {
  title_detailAttributes,
  title_detailCreationAttributes,
} from "./title_detail";
import { title_rating } from "./title_rating";
import type {
  title_ratingAttributes,
  title_ratingCreationAttributes,
} from "./title_rating";
import { title_sellers } from "./title_sellers";
import type {
  title_sellersAttributes,
  title_sellersCreationAttributes,
} from "./title_sellers";
import { title_work_db_image } from "./title_work_db_image";
import type {
  title_work_db_imageAttributes,
  title_work_db_imageCreationAttributes,
} from "./title_work_db_image";
import { title_works } from "./title_works";
import type {
  title_worksAttributes,
  title_worksCreationAttributes,
} from "./title_works";
import { titles } from "./titles";
import type { titlesAttributes, titlesCreationAttributes } from "./titles";
import { user_lists } from "./user_lists";
import type {
  user_listsAttributes,
  user_listsCreationAttributes,
} from "./user_lists";
import { user_setting_locations } from "./user_setting_locations";
import type {
  user_setting_locationsAttributes,
  user_setting_locationsCreationAttributes,
} from "./user_setting_locations";
import { user_settings } from "./user_settings";
import type {
  user_settingsAttributes,
  user_settingsCreationAttributes,
} from "./user_settings";
import { users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  bought_titles,
  cloud_storage_setting,
  connect_accounts,
  covenants,
  covenants_db_images,
  customer,
  db_images,
  deed,
  deed_db_images,
  deed_types,
  document,
  easement_types,
  easements,
  easements_db_images,
  error_logs,
  fee_setting,
  guests,
  invoices,
  invoices_item,
  lien_types,
  liens,
  liens_db_images,
  locations,
  mass_payment,
  migrations,
  misc_civil_probates,
  misc_civil_probates_db_images,
  mortgages,
  mortgages_db_images,
  notifications,
  oauth_access_tokens,
  oauth_auth_codes,
  oauth_clients,
  oauth_personal_access_clients,
  oauth_refresh_tokens,
  order_items,
  orders,
  password_resets,
  payment,
  payment_event,
  payment_method,
  payment_method_type,
  payment_settings,
  permission_role,
  permissions,
  plat_floor_plans,
  plat_floor_plans_db_images,
  profiles,
  role_user,
  role_user_lists,
  roles,
  search_jobs,
  sessions,
  settings,
  subscriptions,
  tax,
  tax_db_images,
  title_book_page,
  title_buyers,
  title_detail,
  title_rating,
  title_sellers,
  title_work_db_image,
  title_works,
  titles,
  user_lists,
  user_setting_locations,
  user_settings,
  users,
};

export type {
  bought_titlesAttributes,
  bought_titlesCreationAttributes,
  cloud_storage_settingAttributes,
  cloud_storage_settingCreationAttributes,
  connect_accountsAttributes,
  connect_accountsCreationAttributes,
  covenantsAttributes,
  covenantsCreationAttributes,
  covenants_db_imagesAttributes,
  covenants_db_imagesCreationAttributes,
  customerAttributes,
  customerCreationAttributes,
  db_imagesAttributes,
  db_imagesCreationAttributes,
  deedAttributes,
  deedCreationAttributes,
  deed_db_imagesAttributes,
  deed_db_imagesCreationAttributes,
  deed_typesAttributes,
  deed_typesCreationAttributes,
  documentAttributes,
  documentCreationAttributes,
  easement_typesAttributes,
  easement_typesCreationAttributes,
  easementsAttributes,
  easementsCreationAttributes,
  easements_db_imagesAttributes,
  easements_db_imagesCreationAttributes,
  error_logsAttributes,
  error_logsCreationAttributes,
  fee_settingAttributes,
  fee_settingCreationAttributes,
  guestsAttributes,
  guestsCreationAttributes,
  invoicesAttributes,
  invoicesCreationAttributes,
  invoices_itemAttributes,
  invoices_itemCreationAttributes,
  lien_typesAttributes,
  lien_typesCreationAttributes,
  liensAttributes,
  liensCreationAttributes,
  liens_db_imagesAttributes,
  liens_db_imagesCreationAttributes,
  locationsAttributes,
  locationsCreationAttributes,
  mass_paymentAttributes,
  mass_paymentCreationAttributes,
  migrationsAttributes,
  migrationsCreationAttributes,
  misc_civil_probatesAttributes,
  misc_civil_probatesCreationAttributes,
  misc_civil_probates_db_imagesAttributes,
  misc_civil_probates_db_imagesCreationAttributes,
  mortgagesAttributes,
  mortgagesCreationAttributes,
  mortgages_db_imagesAttributes,
  mortgages_db_imagesCreationAttributes,
  notificationsAttributes,
  notificationsCreationAttributes,
  oauth_access_tokensAttributes,
  oauth_access_tokensCreationAttributes,
  oauth_auth_codesAttributes,
  oauth_auth_codesCreationAttributes,
  oauth_clientsAttributes,
  oauth_clientsCreationAttributes,
  oauth_personal_access_clientsAttributes,
  oauth_personal_access_clientsCreationAttributes,
  oauth_refresh_tokensAttributes,
  oauth_refresh_tokensCreationAttributes,
  order_itemsAttributes,
  order_itemsCreationAttributes,
  ordersAttributes,
  ordersCreationAttributes,
  password_resetsAttributes,
  password_resetsCreationAttributes,
  paymentAttributes,
  paymentCreationAttributes,
  payment_eventAttributes,
  payment_eventCreationAttributes,
  payment_methodAttributes,
  payment_methodCreationAttributes,
  payment_method_typeAttributes,
  payment_method_typeCreationAttributes,
  payment_settingsAttributes,
  payment_settingsCreationAttributes,
  permission_roleAttributes,
  permission_roleCreationAttributes,
  permissionsAttributes,
  permissionsCreationAttributes,
  plat_floor_plansAttributes,
  plat_floor_plansCreationAttributes,
  plat_floor_plans_db_imagesAttributes,
  plat_floor_plans_db_imagesCreationAttributes,
  profilesAttributes,
  profilesCreationAttributes,
  role_userAttributes,
  role_userCreationAttributes,
  role_user_listsAttributes,
  role_user_listsCreationAttributes,
  rolesAttributes,
  rolesCreationAttributes,
  search_jobsAttributes,
  search_jobsCreationAttributes,
  sessionsAttributes,
  sessionsCreationAttributes,
  settingsAttributes,
  settingsCreationAttributes,
  subscriptionsAttributes,
  subscriptionsCreationAttributes,
  taxAttributes,
  taxCreationAttributes,
  tax_db_imagesAttributes,
  tax_db_imagesCreationAttributes,
  title_book_pageAttributes,
  title_book_pageCreationAttributes,
  title_buyersAttributes,
  title_buyersCreationAttributes,
  title_detailAttributes,
  title_detailCreationAttributes,
  title_ratingAttributes,
  title_ratingCreationAttributes,
  title_sellersAttributes,
  title_sellersCreationAttributes,
  title_work_db_imageAttributes,
  title_work_db_imageCreationAttributes,
  title_worksAttributes,
  title_worksCreationAttributes,
  titlesAttributes,
  titlesCreationAttributes,
  user_listsAttributes,
  user_listsCreationAttributes,
  user_setting_locationsAttributes,
  user_setting_locationsCreationAttributes,
  user_settingsAttributes,
  user_settingsCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  bought_titles.initModel(sequelize);
  cloud_storage_setting.initModel(sequelize);
  connect_accounts.initModel(sequelize);
  covenants.initModel(sequelize);
  covenants_db_images.initModel(sequelize);
  customer.initModel(sequelize);
  db_images.initModel(sequelize);
  deed.initModel(sequelize);
  deed_db_images.initModel(sequelize);
  deed_types.initModel(sequelize);
  document.initModel(sequelize);
  easement_types.initModel(sequelize);
  easements.initModel(sequelize);
  easements_db_images.initModel(sequelize);
  error_logs.initModel(sequelize);
  fee_setting.initModel(sequelize);
  guests.initModel(sequelize);
  invoices.initModel(sequelize);
  invoices_item.initModel(sequelize);
  lien_types.initModel(sequelize);
  liens.initModel(sequelize);
  liens_db_images.initModel(sequelize);
  locations.initModel(sequelize);
  mass_payment.initModel(sequelize);
  migrations.initModel(sequelize);
  misc_civil_probates.initModel(sequelize);
  misc_civil_probates_db_images.initModel(sequelize);
  mortgages.initModel(sequelize);
  mortgages_db_images.initModel(sequelize);
  notifications.initModel(sequelize);
  oauth_access_tokens.initModel(sequelize);
  oauth_auth_codes.initModel(sequelize);
  oauth_clients.initModel(sequelize);
  oauth_personal_access_clients.initModel(sequelize);
  oauth_refresh_tokens.initModel(sequelize);
  order_items.initModel(sequelize);
  orders.initModel(sequelize);
  password_resets.initModel(sequelize);
  payment.initModel(sequelize);
  payment_event.initModel(sequelize);
  payment_method.initModel(sequelize);
  payment_method_type.initModel(sequelize);
  payment_settings.initModel(sequelize);
  permission_role.initModel(sequelize);
  permissions.initModel(sequelize);
  plat_floor_plans.initModel(sequelize);
  plat_floor_plans_db_images.initModel(sequelize);
  profiles.initModel(sequelize);
  role_user.initModel(sequelize);
  role_user_lists.initModel(sequelize);
  roles.initModel(sequelize);
  search_jobs.initModel(sequelize);
  sessions.initModel(sequelize);
  settings.initModel(sequelize);
  subscriptions.initModel(sequelize);
  tax.initModel(sequelize);
  tax_db_images.initModel(sequelize);
  title_book_page.initModel(sequelize);
  title_buyers.initModel(sequelize);
  title_detail.initModel(sequelize);
  title_rating.initModel(sequelize);
  title_sellers.initModel(sequelize);
  title_work_db_image.initModel(sequelize);
  title_works.initModel(sequelize);
  titles.initModel(sequelize);
  user_lists.initModel(sequelize);
  user_setting_locations.initModel(sequelize);
  user_settings.initModel(sequelize);
  users.initModel(sequelize);

  covenants.belongsToMany(db_images, {
    through: covenants_db_images as ModelType,
    foreignKey: "covenant_id",
    otherKey: "db_image_id",
  });
  db_images.belongsToMany(covenants, {
    through: covenants_db_images as ModelType,
    foreignKey: "db_image_id",
    otherKey: "covenant_id",
  });
  db_images.belongsToMany(deed, {
    through: deed_db_images as ModelType,
    foreignKey: "db_image_id",
    otherKey: "deed_id",
  });
  db_images.belongsToMany(easements, {
    through: easements_db_images as ModelType,
    foreignKey: "db_image_id",
    otherKey: "easement_id",
  });
  db_images.belongsToMany(liens, {
    through: liens_db_images as ModelType,
    foreignKey: "db_image_id",
    otherKey: "lien_id",
  });
  db_images.belongsToMany(misc_civil_probates, {
    through: misc_civil_probates_db_images as ModelType,
    foreignKey: "db_image_id",
    otherKey: "misc_civil_probate_id",
  });
  db_images.belongsToMany(mortgages, {
    through: mortgages_db_images as ModelType,
    foreignKey: "db_image_id",
    otherKey: "mortgage_id",
  });
  db_images.belongsToMany(plat_floor_plans, {
    through: plat_floor_plans_db_images as ModelType,
    foreignKey: "db_image_id",
    otherKey: "plat_floor_plan_id",
  });
  db_images.belongsToMany(tax, {
    through: tax_db_images as ModelType,
    foreignKey: "db_image_id",
    otherKey: "tax_id",
  });
  deed.belongsToMany(db_images, {
    through: deed_db_images as ModelType,
    foreignKey: "deed_id",
    otherKey: "db_image_id",
  });
  easements.belongsToMany(db_images, {
    through: easements_db_images as ModelType,
    foreignKey: "easement_id",
    otherKey: "db_image_id",
  });
  liens.belongsToMany(db_images, {
    through: liens_db_images as ModelType,
    foreignKey: "lien_id",
    otherKey: "db_image_id",
  });
  locations.belongsToMany(user_settings, {
    through: user_setting_locations as ModelType,
    foreignKey: "location_id",
    otherKey: "user_setting_id",
  });
  misc_civil_probates.belongsToMany(db_images, {
    through: misc_civil_probates_db_images as ModelType,
    foreignKey: "misc_civil_probate_id",
    otherKey: "db_image_id",
  });
  mortgages.belongsToMany(db_images, {
    through: mortgages_db_images as ModelType,
    foreignKey: "mortgage_id",
    otherKey: "db_image_id",
  });
  permissions.belongsToMany(roles, {
    through: permission_role as ModelType,
    foreignKey: "permission_id",
    otherKey: "role_id",
  });
  plat_floor_plans.belongsToMany(db_images, {
    through: plat_floor_plans_db_images as ModelType,
    foreignKey: "plat_floor_plan_id",
    otherKey: "db_image_id",
  });
  roles.belongsToMany(permissions, {
    through: permission_role as ModelType,
    foreignKey: "role_id",
    otherKey: "permission_id",
  });
  roles.belongsToMany(user_lists, {
    through: role_user_lists as ModelType,
    foreignKey: "role_id",
    otherKey: "user_list_id",
  });
  roles.belongsToMany(users, {
    through: role_user as ModelType,
    foreignKey: "role_id",
    otherKey: "user_id",
  });
  tax.belongsToMany(db_images, {
    through: tax_db_images as ModelType,
    foreignKey: "tax_id",
    otherKey: "db_image_id",
  });
  user_lists.belongsToMany(roles, {
    through: role_user_lists as ModelType,
    foreignKey: "user_list_id",
    otherKey: "role_id",
  });
  user_settings.belongsToMany(locations, {
    through: user_setting_locations as ModelType,
    foreignKey: "user_setting_id",
    otherKey: "location_id",
  });
  users.belongsToMany(roles, {
    through: role_user as ModelType,
    foreignKey: "user_id",
    otherKey: "role_id",
  });
  document.belongsTo(bought_titles, {
    as: "bought_title",
    foreignKey: "bought_title_id",
  });
  bought_titles.hasMany(document, {
    as: "documentss",
    foreignKey: "bought_title_id",
  });
  covenants.belongsTo(covenants, {
    as: "master_document",
    foreignKey: "master_document_id",
  });
  covenants.hasMany(covenants, {
    as: "covenants",
    foreignKey: "master_document_id",
  });
  covenants_db_images.belongsTo(covenants, {
    as: "covenant",
    foreignKey: "covenant_id",
  });
  covenants.hasMany(covenants_db_images, {
    as: "covenants_db_images",
    foreignKey: "covenant_id",
  });
  titles.belongsTo(customer, { as: "customer", foreignKey: "customer_id" });
  customer.hasMany(titles, { as: "titles", foreignKey: "customer_id" });
  covenants_db_images.belongsTo(db_images, {
    as: "db_image",
    foreignKey: "db_image_id",
  });
  db_images.hasMany(covenants_db_images, {
    as: "covenants_db_images",
    foreignKey: "db_image_id",
  });
  deed_db_images.belongsTo(db_images, {
    as: "db_image",
    foreignKey: "db_image_id",
  });
  db_images.hasMany(deed_db_images, {
    as: "deed_db_images",
    foreignKey: "db_image_id",
  });
  easements_db_images.belongsTo(db_images, {
    as: "db_image",
    foreignKey: "db_image_id",
  });
  db_images.hasMany(easements_db_images, {
    as: "easements_db_images",
    foreignKey: "db_image_id",
  });
  liens_db_images.belongsTo(db_images, {
    as: "db_image",
    foreignKey: "db_image_id",
  });
  db_images.hasMany(liens_db_images, {
    as: "liens_db_images",
    foreignKey: "db_image_id",
  });
  misc_civil_probates_db_images.belongsTo(db_images, {
    as: "db_image",
    foreignKey: "db_image_id",
  });
  db_images.hasMany(misc_civil_probates_db_images, {
    as: "misc_civil_probates_db_images",
    foreignKey: "db_image_id",
  });
  mortgages_db_images.belongsTo(db_images, {
    as: "db_image",
    foreignKey: "db_image_id",
  });
  db_images.hasMany(mortgages_db_images, {
    as: "mortgages_db_images",
    foreignKey: "db_image_id",
  });
  plat_floor_plans_db_images.belongsTo(db_images, {
    as: "db_image",
    foreignKey: "db_image_id",
  });
  db_images.hasMany(plat_floor_plans_db_images, {
    as: "plat_floor_plans_db_images",
    foreignKey: "db_image_id",
  });
  tax_db_images.belongsTo(db_images, {
    as: "db_image",
    foreignKey: "db_image_id",
  });
  db_images.hasMany(tax_db_images, {
    as: "tax_db_images",
    foreignKey: "db_image_id",
  });
  deed_db_images.belongsTo(deed, { as: "deed", foreignKey: "deed_id" });
  deed.hasMany(deed_db_images, { as: "deed_db_images", foreignKey: "deed_id" });
  titles.belongsTo(deed, {
    as: "current_owner_deed",
    foreignKey: "current_owner_deed_id",
  });
  deed.hasMany(titles, { as: "titles", foreignKey: "current_owner_deed_id" });
  covenants.belongsTo(deed_types, {
    as: "deed_type",
    foreignKey: "deed_type_id",
  });
  deed_types.hasMany(covenants, {
    as: "covenants",
    foreignKey: "deed_type_id",
  });
  deed.belongsTo(deed_types, { as: "deed_type", foreignKey: "deed_type_id" });
  deed_types.hasMany(deed, { as: "deeds", foreignKey: "deed_type_id" });
  easements.belongsTo(deed_types, {
    as: "deed_type",
    foreignKey: "deed_type_id",
  });
  deed_types.hasMany(easements, {
    as: "easements",
    foreignKey: "deed_type_id",
  });
  liens.belongsTo(deed_types, { as: "deed_type", foreignKey: "deed_type_id" });
  deed_types.hasMany(liens, { as: "liens", foreignKey: "deed_type_id" });
  misc_civil_probates.belongsTo(deed_types, {
    as: "deed_type",
    foreignKey: "deed_type_id",
  });
  deed_types.hasMany(misc_civil_probates, {
    as: "misc_civil_probates",
    foreignKey: "deed_type_id",
  });
  mortgages.belongsTo(deed_types, {
    as: "deed_type",
    foreignKey: "deed_type_id",
  });
  deed_types.hasMany(mortgages, {
    as: "mortgages",
    foreignKey: "deed_type_id",
  });
  plat_floor_plans.belongsTo(deed_types, {
    as: "deed_type",
    foreignKey: "deed_type_id",
  });
  deed_types.hasMany(plat_floor_plans, {
    as: "plat_floor_plans",
    foreignKey: "deed_type_id",
  });
  tax.belongsTo(deed_types, { as: "deed_type", foreignKey: "deed_type_id" });
  deed_types.hasMany(tax, { as: "taxes", foreignKey: "deed_type_id" });
  easements_db_images.belongsTo(easements, {
    as: "easement",
    foreignKey: "easement_id",
  });
  easements.hasMany(easements_db_images, {
    as: "easements_db_images",
    foreignKey: "easement_id",
  });
  bought_titles.belongsTo(guests, { as: "guest", foreignKey: "guest_id" });
  guests.hasMany(bought_titles, {
    as: "bought_titles",
    foreignKey: "guest_id",
  });
  orders.belongsTo(guests, { as: "guest", foreignKey: "guest_id" });
  guests.hasMany(orders, { as: "orders", foreignKey: "guest_id" });
  invoices_item.belongsTo(invoices, {
    as: "invoice",
    foreignKey: "invoice_id",
  });
  invoices.hasMany(invoices_item, {
    as: "invoices_items",
    foreignKey: "invoice_id",
  });
  titles.belongsTo(invoices, { as: "invoice", foreignKey: "invoice_id" });
  invoices.hasOne(titles, { as: "title", foreignKey: "invoice_id" });
  liens.belongsTo(liens, {
    as: "master_document",
    foreignKey: "master_document_id",
  });
  liens.hasMany(liens, { as: "liens", foreignKey: "master_document_id" });
  liens_db_images.belongsTo(liens, { as: "lien", foreignKey: "lien_id" });
  liens.hasMany(liens_db_images, {
    as: "liens_db_images",
    foreignKey: "lien_id",
  });
  bought_titles.belongsTo(locations, {
    as: "location",
    foreignKey: "location_id",
  });
  locations.hasOne(bought_titles, {
    as: "bought_title",
    foreignKey: "location_id",
  });
  profiles.belongsTo(locations, { as: "location", foreignKey: "location_id" });
  locations.hasOne(profiles, { as: "profile", foreignKey: "location_id" });
  search_jobs.belongsTo(locations, {
    as: "location",
    foreignKey: "location_id",
  });
  locations.hasOne(search_jobs, {
    as: "search_job",
    foreignKey: "location_id",
  });
  title_works.belongsTo(locations, {
    as: "location",
    foreignKey: "location_id",
  });
  locations.hasOne(title_works, {
    as: "title_work",
    foreignKey: "location_id",
  });
  titles.belongsTo(locations, { as: "location", foreignKey: "location_id" });
  locations.hasOne(titles, { as: "title", foreignKey: "location_id" });
  user_setting_locations.belongsTo(locations, {
    as: "location",
    foreignKey: "location_id",
  });
  locations.hasMany(user_setting_locations, {
    as: "user_setting_locations",
    foreignKey: "location_id",
  });
  misc_civil_probates_db_images.belongsTo(misc_civil_probates, {
    as: "misc_civil_probate",
    foreignKey: "misc_civil_probate_id",
  });
  misc_civil_probates.hasMany(misc_civil_probates_db_images, {
    as: "misc_civil_probates_db_images",
    foreignKey: "misc_civil_probate_id",
  });
  mortgages.belongsTo(mortgages, {
    as: "master_document",
    foreignKey: "master_document_id",
  });
  mortgages.hasMany(mortgages, {
    as: "mortgages",
    foreignKey: "master_document_id",
  });
  mortgages_db_images.belongsTo(mortgages, {
    as: "mortgage",
    foreignKey: "mortgage_id",
  });
  mortgages.hasMany(mortgages_db_images, {
    as: "mortgages_db_images",
    foreignKey: "mortgage_id",
  });
  bought_titles.belongsTo(order_items, {
    as: "order_item",
    foreignKey: "order_item_id",
  });
  order_items.hasMany(bought_titles, {
    as: "bought_titles",
    foreignKey: "order_item_id",
  });
  order_items.belongsTo(orders, { as: "order", foreignKey: "order_id" });
  orders.hasMany(order_items, { as: "order_items", foreignKey: "order_id" });
  order_items.belongsTo(payment, { as: "payment", foreignKey: "payment_id" });
  payment.hasMany(order_items, { as: "order_items", foreignKey: "payment_id" });
  payment_event.belongsTo(payment, { as: "payment", foreignKey: "payment_id" });
  payment.hasMany(payment_event, {
    as: "payment_events",
    foreignKey: "payment_id",
  });
  profiles.belongsTo(payment_method, {
    as: "payment_method",
    foreignKey: "payment_method_id",
  });
  payment_method.hasOne(profiles, {
    as: "profile",
    foreignKey: "payment_method_id",
  });
  payment_method.belongsTo(payment_method_type, {
    as: "payment_method_type",
    foreignKey: "payment_method_type_id",
  });
  payment_method_type.hasMany(payment_method, {
    as: "payment_methods",
    foreignKey: "payment_method_type_id",
  });
  permission_role.belongsTo(permissions, {
    as: "permission",
    foreignKey: "permission_id",
  });
  permissions.hasMany(permission_role, {
    as: "permission_roles",
    foreignKey: "permission_id",
  });
  plat_floor_plans.belongsTo(plat_floor_plans, {
    as: "master_document",
    foreignKey: "master_document_id",
  });
  plat_floor_plans.hasMany(plat_floor_plans, {
    as: "plat_floor_plans",
    foreignKey: "master_document_id",
  });
  plat_floor_plans_db_images.belongsTo(plat_floor_plans, {
    as: "plat_floor_plan",
    foreignKey: "plat_floor_plan_id",
  });
  plat_floor_plans.hasMany(plat_floor_plans_db_images, {
    as: "plat_floor_plans_db_images",
    foreignKey: "plat_floor_plan_id",
  });
  user_lists.belongsTo(profiles, { as: "profile", foreignKey: "profile_id" });
  profiles.hasOne(user_lists, { as: "user_list", foreignKey: "profile_id" });
  users.belongsTo(profiles, { as: "profile", foreignKey: "profile_id" });
  profiles.hasOne(users, { as: "user", foreignKey: "profile_id" });
  permission_role.belongsTo(roles, { as: "role", foreignKey: "role_id" });
  roles.hasMany(permission_role, {
    as: "permission_roles",
    foreignKey: "role_id",
  });
  role_user.belongsTo(roles, { as: "role", foreignKey: "role_id" });
  roles.hasMany(role_user, { as: "role_users", foreignKey: "role_id" });
  role_user_lists.belongsTo(roles, { as: "role", foreignKey: "role_id" });
  roles.hasMany(role_user_lists, {
    as: "role_user_lists",
    foreignKey: "role_id",
  });
  titles.belongsTo(search_jobs, {
    as: "search_job",
    foreignKey: "search_job_id",
  });
  search_jobs.hasOne(titles, { as: "title", foreignKey: "search_job_id" });
  tax_db_images.belongsTo(tax, { as: "tax", foreignKey: "tax_id" });
  tax.hasMany(tax_db_images, { as: "tax_db_images", foreignKey: "tax_id" });
  title_work_db_image.belongsTo(title_works, {
    as: "title_work",
    foreignKey: "title_work_id",
  });
  title_works.hasMany(title_work_db_image, {
    as: "title_work_db_images",
    foreignKey: "title_work_id",
  });
  bought_titles.belongsTo(titles, { as: "title", foreignKey: "title_id" });
  titles.hasMany(bought_titles, {
    as: "bought_titles",
    foreignKey: "title_id",
  });
  covenants.belongsTo(titles, { as: "title", foreignKey: "title_id" });
  titles.hasMany(covenants, { as: "covenants", foreignKey: "title_id" });
  deed.belongsTo(titles, { as: "title", foreignKey: "title_id" });
  titles.hasMany(deed, { as: "deeds", foreignKey: "title_id" });
  document.belongsTo(titles, { as: "title", foreignKey: "title_id" });
  titles.hasMany(document, { as: "documentss", foreignKey: "title_id" });
  easements.belongsTo(titles, { as: "title", foreignKey: "title_id" });
  titles.hasMany(easements, { as: "easements", foreignKey: "title_id" });
  liens.belongsTo(titles, { as: "title", foreignKey: "title_id" });
  titles.hasMany(liens, { as: "liens", foreignKey: "title_id" });
  misc_civil_probates.belongsTo(titles, {
    as: "title",
    foreignKey: "title_id",
  });
  titles.hasMany(misc_civil_probates, {
    as: "misc_civil_probates",
    foreignKey: "title_id",
  });
  mortgages.belongsTo(titles, { as: "title", foreignKey: "title_id" });
  titles.hasMany(mortgages, { as: "mortgages", foreignKey: "title_id" });
  plat_floor_plans.belongsTo(titles, { as: "title", foreignKey: "title_id" });
  titles.hasMany(plat_floor_plans, {
    as: "plat_floor_plans",
    foreignKey: "title_id",
  });
  tax.belongsTo(titles, { as: "title", foreignKey: "title_id" });
  titles.hasMany(tax, { as: "taxes", foreignKey: "title_id" });
  title_book_page.belongsTo(titles, { as: "title", foreignKey: "title_id" });
  titles.hasMany(title_book_page, {
    as: "title_book_pages",
    foreignKey: "title_id",
  });
  title_buyers.belongsTo(titles, { as: "title", foreignKey: "title_id" });
  titles.hasMany(title_buyers, { as: "title_buyers", foreignKey: "title_id" });
  title_detail.belongsTo(titles, { as: "title", foreignKey: "title_id" });
  titles.hasOne(title_detail, { as: "title_detail", foreignKey: "title_id" });
  title_rating.belongsTo(titles, { as: "title", foreignKey: "title_id" });
  titles.hasMany(title_rating, { as: "title_ratings", foreignKey: "title_id" });
  title_sellers.belongsTo(titles, { as: "title", foreignKey: "title_id" });
  titles.hasMany(title_sellers, {
    as: "title_sellers",
    foreignKey: "title_id",
  });
  title_works.belongsTo(titles, { as: "title", foreignKey: "title_id" });
  titles.hasOne(title_works, { as: "title_work", foreignKey: "title_id" });
  bought_titles.belongsTo(user_lists, {
    as: "owner_list",
    foreignKey: "owner_list_id",
  });
  user_lists.hasMany(bought_titles, {
    as: "bought_titles",
    foreignKey: "owner_list_id",
  });
  connect_accounts.belongsTo(user_lists, {
    as: "user_list",
    foreignKey: "user_list_id",
  });
  user_lists.hasMany(connect_accounts, {
    as: "connect_accounts",
    foreignKey: "user_list_id",
  });
  invoices.belongsTo(user_lists, {
    as: "user_list",
    foreignKey: "user_list_id",
  });
  user_lists.hasMany(invoices, { as: "invoices", foreignKey: "user_list_id" });
  notifications.belongsTo(user_lists, {
    as: "user_list",
    foreignKey: "user_list_id",
  });
  user_lists.hasMany(notifications, {
    as: "notifications",
    foreignKey: "user_list_id",
  });
  order_items.belongsTo(user_lists, {
    as: "beneficiary_list",
    foreignKey: "beneficiary_list_id",
  });
  user_lists.hasMany(order_items, {
    as: "order_items",
    foreignKey: "beneficiary_list_id",
  });
  orders.belongsTo(user_lists, {
    as: "customer_list",
    foreignKey: "customer_list_id",
  });
  user_lists.hasMany(orders, { as: "orders", foreignKey: "customer_list_id" });
  payment.belongsTo(user_lists, {
    as: "recipient_list",
    foreignKey: "recipient_list_id",
  });
  user_lists.hasMany(payment, {
    as: "payments",
    foreignKey: "recipient_list_id",
  });
  role_user_lists.belongsTo(user_lists, {
    as: "user_list",
    foreignKey: "user_list_id",
  });
  user_lists.hasMany(role_user_lists, {
    as: "role_user_lists",
    foreignKey: "user_list_id",
  });
  search_jobs.belongsTo(user_lists, {
    as: "claimant_list",
    foreignKey: "claimant_list_id",
  });
  user_lists.hasMany(search_jobs, {
    as: "search_jobs",
    foreignKey: "claimant_list_id",
  });
  search_jobs.belongsTo(user_lists, {
    as: "assigned_user_list",
    foreignKey: "assigned_user_list_id",
  });
  user_lists.hasMany(search_jobs, {
    as: "assigned_user_list_search_jobs",
    foreignKey: "assigned_user_list_id",
  });
  subscriptions.belongsTo(user_lists, {
    as: "user_list",
    foreignKey: "user_list_id",
  });
  user_lists.hasMany(subscriptions, {
    as: "subscriptions",
    foreignKey: "user_list_id",
  });
  title_rating.belongsTo(user_lists, {
    as: "owner_list",
    foreignKey: "owner_list_id",
  });
  user_lists.hasMany(title_rating, {
    as: "title_ratings",
    foreignKey: "owner_list_id",
  });
  title_works.belongsTo(user_lists, {
    as: "user_list_created_user_list",
    foreignKey: "user_list_created",
  });
  user_lists.hasMany(title_works, {
    as: "title_works",
    foreignKey: "user_list_created",
  });
  titles.belongsTo(user_lists, {
    as: "owner_list",
    foreignKey: "owner_list_id",
  });
  user_lists.hasMany(titles, { as: "titles", foreignKey: "owner_list_id" });
  user_lists.belongsTo(user_settings, {
    as: "user_setting",
    foreignKey: "user_setting_id",
  });
  user_settings.hasOne(user_lists, {
    as: "user_list",
    foreignKey: "user_setting_id",
  });
  user_setting_locations.belongsTo(user_settings, {
    as: "user_setting",
    foreignKey: "user_setting_id",
  });
  user_settings.hasMany(user_setting_locations, {
    as: "user_setting_locations",
    foreignKey: "user_setting_id",
  });
  users.belongsTo(user_settings, {
    as: "user_setting",
    foreignKey: "user_setting_id",
  });
  user_settings.hasOne(users, { as: "user", foreignKey: "user_setting_id" });
  bought_titles.belongsTo(users, { as: "owner", foreignKey: "owner_id" });
  users.hasMany(bought_titles, { as: "bought_titles", foreignKey: "owner_id" });
  connect_accounts.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasOne(connect_accounts, {
    as: "connect_account",
    foreignKey: "user_id",
  });
  invoices.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(invoices, { as: "invoices", foreignKey: "user_id" });
  notifications.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(notifications, { as: "notifications", foreignKey: "user_id" });
  order_items.belongsTo(users, {
    as: "beneficiary",
    foreignKey: "beneficiary_id",
  });
  users.hasMany(order_items, {
    as: "order_items",
    foreignKey: "beneficiary_id",
  });
  orders.belongsTo(users, { as: "customer", foreignKey: "customer_id" });
  users.hasMany(orders, { as: "orders", foreignKey: "customer_id" });
  payment.belongsTo(users, { as: "recipient", foreignKey: "recipient_id" });
  users.hasMany(payment, { as: "payments", foreignKey: "recipient_id" });
  role_user.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(role_user, { as: "role_users", foreignKey: "user_id" });
  search_jobs.belongsTo(users, { as: "claimant", foreignKey: "claimant_id" });
  users.hasMany(search_jobs, { as: "search_jobs", foreignKey: "claimant_id" });
  search_jobs.belongsTo(users, {
    as: "assigned_user",
    foreignKey: "assigned_user_id",
  });
  users.hasMany(search_jobs, {
    as: "assigned_user_search_jobs",
    foreignKey: "assigned_user_id",
  });
  subscriptions.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(subscriptions, { as: "subscriptions", foreignKey: "user_id" });
  title_rating.belongsTo(users, { as: "owner", foreignKey: "owner_id" });
  users.hasMany(title_rating, { as: "title_ratings", foreignKey: "owner_id" });
  title_works.belongsTo(users, {
    as: "user_created_user",
    foreignKey: "user_created",
  });
  users.hasMany(title_works, { as: "title_works", foreignKey: "user_created" });
  titles.belongsTo(users, { as: "owner", foreignKey: "owner_id" });
  users.hasMany(titles, { as: "titles", foreignKey: "owner_id" });

  return {
    bought_titles,
    cloud_storage_setting,
    connect_accounts,
    covenants,
    covenants_db_images,
    customer,
    db_images,
    deed,
    deed_db_images,
    deed_types,
    document,
    easement_types,
    easements,
    easements_db_images,
    error_logs,
    fee_setting,
    guests,
    invoices,
    invoices_item,
    lien_types,
    liens,
    liens_db_images,
    locations,
    mass_payment,
    migrations,
    misc_civil_probates,
    misc_civil_probates_db_images,
    mortgages,
    mortgages_db_images,
    notifications,
    oauth_access_tokens,
    oauth_auth_codes,
    oauth_clients,
    oauth_personal_access_clients,
    oauth_refresh_tokens,
    order_items,
    orders,
    password_resets,
    payment,
    payment_event,
    payment_method,
    payment_method_type,
    payment_settings,
    permission_role,
    permissions,
    plat_floor_plans,
    plat_floor_plans_db_images,
    profiles,
    role_user,
    role_user_lists,
    roles,
    search_jobs,
    sessions,
    settings,
    subscriptions,
    tax,
    tax_db_images,
    title_book_page,
    title_buyers,
    title_detail,
    title_rating,
    title_sellers,
    title_work_db_image,
    title_works,
    titles,
    user_lists,
    user_setting_locations,
    user_settings,
    users,
  };
}
