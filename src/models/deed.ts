import Sequelize, { DataTypes, Model, Optional } from "sequelize";
import type { db_images, db_imagesId } from "./db_images";
import type { deed_db_images, deed_db_imagesId } from "./deed_db_images";
import type { deed_types, deed_typesId } from "./deed_types";
import type { titles, titlesId } from "./titles";

export interface deedAttributes {
  id: number;
  title_id?: number;
  deed_date?: string;
  rec_date?: string;
  deed_book?: string;
  deed_page?: string;
  grantor?: string;
  grantee?: string;
  created_at: Date;
  updated_at: Date;
  deed_type_id?: number;
  current_owner: number;
  sell_in_virtual_vault: number;
  publish: number;
  price?: number;
  position?: number;
}

export type deedPk = "id";
export type deedId = deed[deedPk];
export type deedCreationAttributes = Optional<deedAttributes, deedPk>;

export class deed
  extends Model<deedAttributes, deedCreationAttributes>
  implements deedAttributes
{
  id!: number;
  title_id?: number;
  deed_date?: string;
  rec_date?: string;
  deed_book?: string;
  deed_page?: string;
  grantor?: string;
  grantee?: string;
  created_at!: Date;
  updated_at!: Date;
  deed_type_id?: number;
  current_owner!: number;
  sell_in_virtual_vault!: number;
  publish!: number;
  price?: number;
  position?: number;

  // deed belongsToMany db_images via deed_id and db_image_id
  db_images!: db_images[];
  getDb_images!: Sequelize.BelongsToManyGetAssociationsMixin<db_images>;
  setDb_images!: Sequelize.BelongsToManySetAssociationsMixin<
    db_images,
    db_imagesId
  >;
  addDb_image!: Sequelize.BelongsToManyAddAssociationMixin<
    db_images,
    db_imagesId
  >;
  addDb_images!: Sequelize.BelongsToManyAddAssociationsMixin<
    db_images,
    db_imagesId
  >;
  createDb_image!: Sequelize.BelongsToManyCreateAssociationMixin<db_images>;
  removeDb_image!: Sequelize.BelongsToManyRemoveAssociationMixin<
    db_images,
    db_imagesId
  >;
  removeDb_images!: Sequelize.BelongsToManyRemoveAssociationsMixin<
    db_images,
    db_imagesId
  >;
  hasDb_image!: Sequelize.BelongsToManyHasAssociationMixin<
    db_images,
    db_imagesId
  >;
  hasDb_images!: Sequelize.BelongsToManyHasAssociationsMixin<
    db_images,
    db_imagesId
  >;
  countDb_images!: Sequelize.BelongsToManyCountAssociationsMixin;
  // deed hasMany deed_db_images via deed_id
  deed_db_images!: deed_db_images[];
  getDeed_db_images!: Sequelize.HasManyGetAssociationsMixin<deed_db_images>;
  setDeed_db_images!: Sequelize.HasManySetAssociationsMixin<
    deed_db_images,
    deed_db_imagesId
  >;
  addDeed_db_image!: Sequelize.HasManyAddAssociationMixin<
    deed_db_images,
    deed_db_imagesId
  >;
  addDeed_db_images!: Sequelize.HasManyAddAssociationsMixin<
    deed_db_images,
    deed_db_imagesId
  >;
  createDeed_db_image!: Sequelize.HasManyCreateAssociationMixin<deed_db_images>;
  removeDeed_db_image!: Sequelize.HasManyRemoveAssociationMixin<
    deed_db_images,
    deed_db_imagesId
  >;
  removeDeed_db_images!: Sequelize.HasManyRemoveAssociationsMixin<
    deed_db_images,
    deed_db_imagesId
  >;
  hasDeed_db_image!: Sequelize.HasManyHasAssociationMixin<
    deed_db_images,
    deed_db_imagesId
  >;
  hasDeed_db_images!: Sequelize.HasManyHasAssociationsMixin<
    deed_db_images,
    deed_db_imagesId
  >;
  countDeed_db_images!: Sequelize.HasManyCountAssociationsMixin;
  // deed hasMany titles via current_owner_deed_id
  titles!: titles[];
  getTitles!: Sequelize.HasManyGetAssociationsMixin<titles>;
  setTitles!: Sequelize.HasManySetAssociationsMixin<titles, titlesId>;
  addTitle!: Sequelize.HasManyAddAssociationMixin<titles, titlesId>;
  addTitles!: Sequelize.HasManyAddAssociationsMixin<titles, titlesId>;
  createTitles!: Sequelize.HasManyCreateAssociationMixin<titles>;
  removeTitle!: Sequelize.HasManyRemoveAssociationMixin<titles, titlesId>;
  removeTitles!: Sequelize.HasManyRemoveAssociationsMixin<titles, titlesId>;
  hasTitle!: Sequelize.HasManyHasAssociationMixin<titles, titlesId>;
  hasTitles!: Sequelize.HasManyHasAssociationsMixin<titles, titlesId>;
  countTitles!: Sequelize.HasManyCountAssociationsMixin;
  // deed belongsTo deed_types via deed_type_id
  deed_type!: deed_types;
  getDeed_type!: Sequelize.BelongsToGetAssociationMixin<deed_types>;
  setDeed_type!: Sequelize.BelongsToSetAssociationMixin<
    deed_types,
    deed_typesId
  >;
  createDeed_type!: Sequelize.BelongsToCreateAssociationMixin<deed_types>;
  // deed belongsTo titles via title_id
  title!: titles;
  getTitle!: Sequelize.BelongsToGetAssociationMixin<titles>;
  setTitle!: Sequelize.BelongsToSetAssociationMixin<titles, titlesId>;
  createTitle!: Sequelize.BelongsToCreateAssociationMixin<titles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof deed {
    deed.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        title_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "titles",
            key: "id",
          },
        },
        deed_date: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        rec_date: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        deed_book: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        deed_page: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        grantor: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        grantee: {
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
        deed_type_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "deed_types",
            key: "id",
          },
        },
        current_owner: {
          type: DataTypes.TINYINT,
          allowNull: false,
          defaultValue: 0,
        },
        sell_in_virtual_vault: {
          type: DataTypes.TINYINT,
          allowNull: false,
          defaultValue: 1,
        },
        publish: {
          type: DataTypes.TINYINT,
          allowNull: false,
          defaultValue: 0,
        },
        price: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        position: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "deed",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
          {
            name: "IDX_89498C20A9F87BD",
            using: "BTREE",
            fields: [{ name: "title_id" }],
          },
          {
            name: "IDX_89498C2093650679",
            using: "BTREE",
            fields: [{ name: "deed_type_id" }],
          },
        ],
      }
    );
    return deed;
  }
}
