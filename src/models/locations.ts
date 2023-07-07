import Sequelize, { DataTypes, Model, Optional } from "sequelize";
import type {
  bought_titles,
  bought_titlesCreationAttributes,
  bought_titlesId,
} from "./bought_titles";
import type {
  profiles,
  profilesCreationAttributes,
  profilesId,
} from "./profiles";
import type {
  search_jobs,
  search_jobsCreationAttributes,
  search_jobsId,
} from "./search_jobs";
import type {
  title_works,
  title_worksCreationAttributes,
  title_worksId,
} from "./title_works";
import type { titles, titlesCreationAttributes, titlesId } from "./titles";
import type {
  user_setting_locations,
  user_setting_locationsId,
} from "./user_setting_locations";
import type { user_settings, user_settingsId } from "./user_settings";

export interface locationsAttributes {
  id: number;
  name?: string;
  place_id?: string;
  street_number?: string;
  city?: string;
  state?: string;
  country_code?: string;
  country?: string;
  post_code?: string;
  district?: string;
  latitude?: number;
  longitude?: number;
  created_at: Date;
  updated_at: Date;
}

export type locationsPk = "id";
export type locationsId = locations[locationsPk];
export type locationsCreationAttributes = Optional<
  locationsAttributes,
  locationsPk
>;

export class locations
  extends Model<locationsAttributes, locationsCreationAttributes>
  implements locationsAttributes
{
  id!: number;
  name?: string;
  place_id?: string;
  street_number?: string;
  city?: string;
  state?: string;
  country_code?: string;
  country?: string;
  post_code?: string;
  district?: string;
  latitude?: number;
  longitude?: number;
  created_at!: Date;
  updated_at!: Date;

  // locations hasOne bought_titles via location_id
  bought_title!: bought_titles;
  getBought_title!: Sequelize.HasOneGetAssociationMixin<bought_titles>;
  setBought_title!: Sequelize.HasOneSetAssociationMixin<
    bought_titles,
    bought_titlesId
  >;
  // locations hasOne profiles via location_id
  profile!: profiles;
  getProfile!: Sequelize.HasOneGetAssociationMixin<profiles>;
  setProfile!: Sequelize.HasOneSetAssociationMixin<profiles, profilesId>;
  // locations hasOne search_jobs via location_id
  search_job!: search_jobs;
  getSearch_job!: Sequelize.HasOneGetAssociationMixin<search_jobs>;
  setSearch_job!: Sequelize.HasOneSetAssociationMixin<
    search_jobs,
    search_jobsId
  >;
  // locations hasOne title_works via location_id
  title_work!: title_works;
  getTitle_work!: Sequelize.HasOneGetAssociationMixin<title_works>;
  setTitle_work!: Sequelize.HasOneSetAssociationMixin<
    title_works,
    title_worksId
  >;
  // locations hasOne titles via location_id
  title!: titles;
  getTitle!: Sequelize.HasOneGetAssociationMixin<titles>;
  setTitle!: Sequelize.HasOneSetAssociationMixin<titles, titlesId>;
  // locations hasMany user_setting_locations via location_id
  user_setting_locations!: user_setting_locations[];
  getUser_setting_locations!: Sequelize.HasManyGetAssociationsMixin<user_setting_locations>;
  setUser_setting_locations!: Sequelize.HasManySetAssociationsMixin<
    user_setting_locations,
    user_setting_locationsId
  >;
  addUser_setting_location!: Sequelize.HasManyAddAssociationMixin<
    user_setting_locations,
    user_setting_locationsId
  >;
  addUser_setting_locations!: Sequelize.HasManyAddAssociationsMixin<
    user_setting_locations,
    user_setting_locationsId
  >;
  createUser_setting_location!: Sequelize.HasManyCreateAssociationMixin<user_setting_locations>;
  removeUser_setting_location!: Sequelize.HasManyRemoveAssociationMixin<
    user_setting_locations,
    user_setting_locationsId
  >;
  removeUser_setting_locations!: Sequelize.HasManyRemoveAssociationsMixin<
    user_setting_locations,
    user_setting_locationsId
  >;
  hasUser_setting_location!: Sequelize.HasManyHasAssociationMixin<
    user_setting_locations,
    user_setting_locationsId
  >;
  hasUser_setting_locations!: Sequelize.HasManyHasAssociationsMixin<
    user_setting_locations,
    user_setting_locationsId
  >;
  countUser_setting_locations!: Sequelize.HasManyCountAssociationsMixin;
  // locations belongsToMany user_settings via location_id and user_setting_id
  user_settings!: user_settings[];
  getUser_settings!: Sequelize.BelongsToManyGetAssociationsMixin<user_settings>;
  setUser_settings!: Sequelize.BelongsToManySetAssociationsMixin<
    user_settings,
    user_settingsId
  >;
  addUser_setting!: Sequelize.BelongsToManyAddAssociationMixin<
    user_settings,
    user_settingsId
  >;
  addUser_settings!: Sequelize.BelongsToManyAddAssociationsMixin<
    user_settings,
    user_settingsId
  >;
  createUser_setting!: Sequelize.BelongsToManyCreateAssociationMixin<user_settings>;
  removeUser_setting!: Sequelize.BelongsToManyRemoveAssociationMixin<
    user_settings,
    user_settingsId
  >;
  removeUser_settings!: Sequelize.BelongsToManyRemoveAssociationsMixin<
    user_settings,
    user_settingsId
  >;
  hasUser_setting!: Sequelize.BelongsToManyHasAssociationMixin<
    user_settings,
    user_settingsId
  >;
  hasUser_settings!: Sequelize.BelongsToManyHasAssociationsMixin<
    user_settings,
    user_settingsId
  >;
  countUser_settings!: Sequelize.BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof locations {
    locations.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        place_id: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        street_number: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        city: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        state: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        country_code: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        country: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        post_code: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        district: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        latitude: {
          type: DataTypes.DECIMAL(12, 8),
          allowNull: true,
        },
        longitude: {
          type: DataTypes.DECIMAL(12, 8),
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
      },
      {
        sequelize,
        tableName: "locations",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
        ],
      }
    );
    return locations;
  }
}
