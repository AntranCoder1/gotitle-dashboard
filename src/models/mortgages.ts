import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { db_images, db_imagesId } from './db_images';
import type { deed_types, deed_typesId } from './deed_types';
import type { mortgages_db_images, mortgages_db_imagesId } from './mortgages_db_images';
import type { titles, titlesId } from './titles';

export interface mortgagesAttributes {
  id: number;
  title_id?: number;
  deed_date?: string;
  rec_date?: string;
  deed_book?: string;
  deed_page?: string;
  grantor?: string;
  grantee?: string;
  amount_borrowed?: string;
  transfer_list?: string;
  re_recorded_list?: string;
  subordinated_list?: string;
  ucc_list?: string;
  created_at: Date;
  updated_at: Date;
  deed_type_id?: number;
  master_document_id?: number;
  pud_condo?: string;
  assigned_transfer?: string;
  sell_in_virtual_vault: number;
  publish: number;
  price?: number;
  position?: number;
}

export type mortgagesPk = "id";
export type mortgagesId = mortgages[mortgagesPk];
export type mortgagesCreationAttributes = Optional<mortgagesAttributes, mortgagesPk>;

export class mortgages extends Model<mortgagesAttributes, mortgagesCreationAttributes> implements mortgagesAttributes {
  id!: number;
  title_id?: number;
  deed_date?: string;
  rec_date?: string;
  deed_book?: string;
  deed_page?: string;
  grantor?: string;
  grantee?: string;
  amount_borrowed?: string;
  transfer_list?: string;
  re_recorded_list?: string;
  subordinated_list?: string;
  ucc_list?: string;
  created_at!: Date;
  updated_at!: Date;
  deed_type_id?: number;
  master_document_id?: number;
  pud_condo?: string;
  assigned_transfer?: string;
  sell_in_virtual_vault!: number;
  publish!: number;
  price?: number;
  position?: number;

  // mortgages belongsTo deed_types via deed_type_id
  deed_type!: deed_types;
  getDeed_type!: Sequelize.BelongsToGetAssociationMixin<deed_types>;
  setDeed_type!: Sequelize.BelongsToSetAssociationMixin<deed_types, deed_typesId>;
  createDeed_type!: Sequelize.BelongsToCreateAssociationMixin<deed_types>;
  // mortgages belongsToMany db_images via mortgage_id and db_image_id
  db_images!: db_images[];
  getDb_images!: Sequelize.BelongsToManyGetAssociationsMixin<db_images>;
  setDb_images!: Sequelize.BelongsToManySetAssociationsMixin<db_images, db_imagesId>;
  addDb_image!: Sequelize.BelongsToManyAddAssociationMixin<db_images, db_imagesId>;
  addDb_images!: Sequelize.BelongsToManyAddAssociationsMixin<db_images, db_imagesId>;
  createDb_image!: Sequelize.BelongsToManyCreateAssociationMixin<db_images>;
  removeDb_image!: Sequelize.BelongsToManyRemoveAssociationMixin<db_images, db_imagesId>;
  removeDb_images!: Sequelize.BelongsToManyRemoveAssociationsMixin<db_images, db_imagesId>;
  hasDb_image!: Sequelize.BelongsToManyHasAssociationMixin<db_images, db_imagesId>;
  hasDb_images!: Sequelize.BelongsToManyHasAssociationsMixin<db_images, db_imagesId>;
  countDb_images!: Sequelize.BelongsToManyCountAssociationsMixin;
  // mortgages belongsTo mortgages via master_document_id
  master_document!: mortgages;
  getMaster_document!: Sequelize.BelongsToGetAssociationMixin<mortgages>;
  setMaster_document!: Sequelize.BelongsToSetAssociationMixin<mortgages, mortgagesId>;
  createMaster_document!: Sequelize.BelongsToCreateAssociationMixin<mortgages>;
  // mortgages hasMany mortgages_db_images via mortgage_id
  mortgages_db_images!: mortgages_db_images[];
  getMortgages_db_images!: Sequelize.HasManyGetAssociationsMixin<mortgages_db_images>;
  setMortgages_db_images!: Sequelize.HasManySetAssociationsMixin<mortgages_db_images, mortgages_db_imagesId>;
  addMortgages_db_image!: Sequelize.HasManyAddAssociationMixin<mortgages_db_images, mortgages_db_imagesId>;
  addMortgages_db_images!: Sequelize.HasManyAddAssociationsMixin<mortgages_db_images, mortgages_db_imagesId>;
  createMortgages_db_image!: Sequelize.HasManyCreateAssociationMixin<mortgages_db_images>;
  removeMortgages_db_image!: Sequelize.HasManyRemoveAssociationMixin<mortgages_db_images, mortgages_db_imagesId>;
  removeMortgages_db_images!: Sequelize.HasManyRemoveAssociationsMixin<mortgages_db_images, mortgages_db_imagesId>;
  hasMortgages_db_image!: Sequelize.HasManyHasAssociationMixin<mortgages_db_images, mortgages_db_imagesId>;
  hasMortgages_db_images!: Sequelize.HasManyHasAssociationsMixin<mortgages_db_images, mortgages_db_imagesId>;
  countMortgages_db_images!: Sequelize.HasManyCountAssociationsMixin;
  // mortgages belongsTo titles via title_id
  title!: titles;
  getTitle!: Sequelize.BelongsToGetAssociationMixin<titles>;
  setTitle!: Sequelize.BelongsToSetAssociationMixin<titles, titlesId>;
  createTitle!: Sequelize.BelongsToCreateAssociationMixin<titles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof mortgages {
    mortgages.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'titles',
        key: 'id'
      }
    },
    deed_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rec_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    deed_book: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deed_page: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    grantor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    grantee: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    amount_borrowed: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    transfer_list: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    re_recorded_list: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    subordinated_list: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ucc_list: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deed_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'deed_types',
        key: 'id'
      }
    },
    master_document_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mortgages',
        key: 'id'
      }
    },
    pud_condo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assigned_transfer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sell_in_virtual_vault: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    publish: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mortgages',
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
        name: "IDX_9D3C1765A9F87BD",
        using: "BTREE",
        fields: [
          { name: "title_id" },
        ]
      },
      {
        name: "IDX_9D3C176593650679",
        using: "BTREE",
        fields: [
          { name: "deed_type_id" },
        ]
      },
      {
        name: "IDX_9D3C1765C937C8B2",
        using: "BTREE",
        fields: [
          { name: "master_document_id" },
        ]
      },
    ]
  });
  return mortgages;
  }
}
