import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { db_images, db_imagesId } from './db_images';
import type { deed_types, deed_typesId } from './deed_types';
import type { tax_db_images, tax_db_imagesId } from './tax_db_images';
import type { titles, titlesId } from './titles';

export interface taxAttributes {
  id: number;
  deed_type_id?: number;
  title_id?: number;
  county?: string;
  tax_year?: string;
  tax_payer_name?: string;
  assessed_value?: string;
  parcel_id?: string;
  amount_paid?: string;
  date_paid?: string;
  amount_owned?: string;
  date_due?: string;
  municipality?: string;
  account_number?: string;
  municipal_amount_paid?: string;
  municipal_date_paid?: string;
  municipal_amount_owned?: string;
  municipal_date_due?: string;
  water?: string;
  sewer?: string;
  sanitation?: string;
  created_at: Date;
  updated_at: Date;
  municipal_tax_year?: string;
  position?: number;
}

export type taxPk = "id";
export type taxId = tax[taxPk];
export type taxCreationAttributes = Optional<taxAttributes, taxPk>;

export class tax extends Model<taxAttributes, taxCreationAttributes> implements taxAttributes {
  id!: number;
  deed_type_id?: number;
  title_id?: number;
  county?: string;
  tax_year?: string;
  tax_payer_name?: string;
  assessed_value?: string;
  parcel_id?: string;
  amount_paid?: string;
  date_paid?: string;
  amount_owned?: string;
  date_due?: string;
  municipality?: string;
  account_number?: string;
  municipal_amount_paid?: string;
  municipal_date_paid?: string;
  municipal_amount_owned?: string;
  municipal_date_due?: string;
  water?: string;
  sewer?: string;
  sanitation?: string;
  created_at!: Date;
  updated_at!: Date;
  municipal_tax_year?: string;
  position?: number;

  // tax belongsTo deed_types via deed_type_id
  deed_type!: deed_types;
  getDeed_type!: Sequelize.BelongsToGetAssociationMixin<deed_types>;
  setDeed_type!: Sequelize.BelongsToSetAssociationMixin<deed_types, deed_typesId>;
  createDeed_type!: Sequelize.BelongsToCreateAssociationMixin<deed_types>;
  // tax belongsToMany db_images via tax_id and db_image_id
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
  // tax hasMany tax_db_images via tax_id
  tax_db_images!: tax_db_images[];
  getTax_db_images!: Sequelize.HasManyGetAssociationsMixin<tax_db_images>;
  setTax_db_images!: Sequelize.HasManySetAssociationsMixin<tax_db_images, tax_db_imagesId>;
  addTax_db_image!: Sequelize.HasManyAddAssociationMixin<tax_db_images, tax_db_imagesId>;
  addTax_db_images!: Sequelize.HasManyAddAssociationsMixin<tax_db_images, tax_db_imagesId>;
  createTax_db_image!: Sequelize.HasManyCreateAssociationMixin<tax_db_images>;
  removeTax_db_image!: Sequelize.HasManyRemoveAssociationMixin<tax_db_images, tax_db_imagesId>;
  removeTax_db_images!: Sequelize.HasManyRemoveAssociationsMixin<tax_db_images, tax_db_imagesId>;
  hasTax_db_image!: Sequelize.HasManyHasAssociationMixin<tax_db_images, tax_db_imagesId>;
  hasTax_db_images!: Sequelize.HasManyHasAssociationsMixin<tax_db_images, tax_db_imagesId>;
  countTax_db_images!: Sequelize.HasManyCountAssociationsMixin;
  // tax belongsTo titles via title_id
  title!: titles;
  getTitle!: Sequelize.BelongsToGetAssociationMixin<titles>;
  setTitle!: Sequelize.BelongsToSetAssociationMixin<titles, titlesId>;
  createTitle!: Sequelize.BelongsToCreateAssociationMixin<titles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tax {
    tax.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    deed_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'deed_types',
        key: 'id'
      }
    },
    title_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'titles',
        key: 'id'
      }
    },
    county: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_year: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_payer_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assessed_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    parcel_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_paid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_paid: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    amount_owned: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_due: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    municipality: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    municipal_amount_paid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    municipal_date_paid: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    municipal_amount_owned: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    municipal_date_due: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    water: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sewer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sanitation: {
      type: DataTypes.STRING(255),
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
    municipal_tax_year: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tax',
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
        name: "IDX_8E81BA7693650679",
        using: "BTREE",
        fields: [
          { name: "deed_type_id" },
        ]
      },
      {
        name: "IDX_8E81BA76A9F87BD",
        using: "BTREE",
        fields: [
          { name: "title_id" },
        ]
      },
    ]
  });
  return tax;
  }
}
