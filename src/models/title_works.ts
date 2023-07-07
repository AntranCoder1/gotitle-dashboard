import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { locations, locationsId } from './locations';
import type { title_work_db_image, title_work_db_imageId } from './title_work_db_image';
import type { titles, titlesId } from './titles';
import type { user_lists, user_listsId } from './user_lists';
import type { users, usersId } from './users';

export interface title_worksAttributes {
  id: number;
  location_id?: number;
  user_created?: number;
  user_list_created?: number;
  title_id?: number;
  location_name?: string;
  apartment?: string;
  search_type?: string;
  search_type_detail?: string;
  search_type_detail_value?: string;
  search_type_detail_updated?: string;
  deed_document?: string;
  mortgage_document?: string;
  lien_document?: string;
  plat_floor_plan_document?: string;
  easement_lease_document?: string;
  misc_civil_probate_document?: string;
  tax_document?: string;
  sellers_name?: string;
  buyers_name?: string;
  tax_information_request?: number;
  copies_type?: string;
  special_instructions?: string;
  date_search?: string;
  date_effective?: string;
  note?: string;
  price?: number;
  status?: string;
  date_expired?: string;
  created_at: Date;
  updated_at: Date;
}

export type title_worksPk = "id";
export type title_worksId = title_works[title_worksPk];
export type title_worksCreationAttributes = Optional<title_worksAttributes, title_worksPk>;

export class title_works extends Model<title_worksAttributes, title_worksCreationAttributes> implements title_worksAttributes {
  id!: number;
  location_id?: number;
  user_created?: number;
  user_list_created?: number;
  title_id?: number;
  location_name?: string;
  apartment?: string;
  search_type?: string;
  search_type_detail?: string;
  search_type_detail_value?: string;
  search_type_detail_updated?: string;
  deed_document?: string;
  mortgage_document?: string;
  lien_document?: string;
  plat_floor_plan_document?: string;
  easement_lease_document?: string;
  misc_civil_probate_document?: string;
  tax_document?: string;
  sellers_name?: string;
  buyers_name?: string;
  tax_information_request?: number;
  copies_type?: string;
  special_instructions?: string;
  date_search?: string;
  date_effective?: string;
  note?: string;
  price?: number;
  status?: string;
  date_expired?: string;
  created_at!: Date;
  updated_at!: Date;

  // title_works belongsTo locations via location_id
  location!: locations;
  getLocation!: Sequelize.BelongsToGetAssociationMixin<locations>;
  setLocation!: Sequelize.BelongsToSetAssociationMixin<locations, locationsId>;
  createLocation!: Sequelize.BelongsToCreateAssociationMixin<locations>;
  // title_works hasMany title_work_db_image via title_work_id
  title_work_db_images!: title_work_db_image[];
  getTitle_work_db_images!: Sequelize.HasManyGetAssociationsMixin<title_work_db_image>;
  setTitle_work_db_images!: Sequelize.HasManySetAssociationsMixin<title_work_db_image, title_work_db_imageId>;
  addTitle_work_db_image!: Sequelize.HasManyAddAssociationMixin<title_work_db_image, title_work_db_imageId>;
  addTitle_work_db_images!: Sequelize.HasManyAddAssociationsMixin<title_work_db_image, title_work_db_imageId>;
  createTitle_work_db_image!: Sequelize.HasManyCreateAssociationMixin<title_work_db_image>;
  removeTitle_work_db_image!: Sequelize.HasManyRemoveAssociationMixin<title_work_db_image, title_work_db_imageId>;
  removeTitle_work_db_images!: Sequelize.HasManyRemoveAssociationsMixin<title_work_db_image, title_work_db_imageId>;
  hasTitle_work_db_image!: Sequelize.HasManyHasAssociationMixin<title_work_db_image, title_work_db_imageId>;
  hasTitle_work_db_images!: Sequelize.HasManyHasAssociationsMixin<title_work_db_image, title_work_db_imageId>;
  countTitle_work_db_images!: Sequelize.HasManyCountAssociationsMixin;
  // title_works belongsTo titles via title_id
  title!: titles;
  getTitle!: Sequelize.BelongsToGetAssociationMixin<titles>;
  setTitle!: Sequelize.BelongsToSetAssociationMixin<titles, titlesId>;
  createTitle!: Sequelize.BelongsToCreateAssociationMixin<titles>;
  // title_works belongsTo user_lists via user_list_created
  user_list_created_user_list!: user_lists;
  getUser_list_created_user_list!: Sequelize.BelongsToGetAssociationMixin<user_lists>;
  setUser_list_created_user_list!: Sequelize.BelongsToSetAssociationMixin<user_lists, user_listsId>;
  createUser_list_created_user_list!: Sequelize.BelongsToCreateAssociationMixin<user_lists>;
  // title_works belongsTo users via user_created
  user_created_user!: users;
  getUser_created_user!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser_created_user!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser_created_user!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof title_works {
    title_works.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'locations',
        key: 'id'
      },
      unique: "FK_3614B43464D218E"
    },
    user_created: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    user_list_created: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_lists',
        key: 'id'
      }
    },
    title_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'titles',
        key: 'id'
      },
      unique: "FK_3614B434A9F87BD"
    },
    location_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    apartment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    search_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    search_type_detail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    search_type_detail_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    search_type_detail_updated: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    deed_document: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mortgage_document: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lien_document: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    plat_floor_plan_document: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    easement_lease_document: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    misc_civil_probate_document: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tax_document: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sellers_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    buyers_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_information_request: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    copies_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    special_instructions: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_search: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_effective: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_expired: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'title_works',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "UNIQ_3614B43464D218E",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "location_id" },
        ]
      },
      {
        name: "UNIQ_3614B434A9F87BD",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "title_id" },
        ]
      },
      {
        name: "IDX_3614B434EA30A9B2",
        using: "BTREE",
        fields: [
          { name: "user_created" },
        ]
      },
      {
        name: "IDX_3614B434EA30A9B3",
        using: "BTREE",
        fields: [
          { name: "user_list_created" },
        ]
      },
    ]
  });
  return title_works;
  }
}
