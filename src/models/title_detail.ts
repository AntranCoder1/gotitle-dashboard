import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { titles, titlesId } from './titles';

export interface title_detailAttributes {
  id: number;
  title_id?: number;
  client_price?: number;
  company_name?: string;
  company_file_number?: string;
  company_client_name?: string;
  company_client_file_number?: string;
  search_type_tax_information_request?: number;
  search_type_copies_requested?: string;
  search_date_updated?: string;
  special_instructions?: string;
  interest_residential?: string;
  tract?: string;
  building?: string;
  acres?: string;
  metes_bound?: string;
  has_real_state?: number;
  has_civil?: number;
  has_probate_estate?: number;
  has_liens?: number;
  has_taxes?: number;
  is_open_section?: number;
  created_at: Date;
  updated_at: Date;
}

export type title_detailPk = "id";
export type title_detailId = title_detail[title_detailPk];
export type title_detailCreationAttributes = Optional<title_detailAttributes, title_detailPk>;

export class title_detail extends Model<title_detailAttributes, title_detailCreationAttributes> implements title_detailAttributes {
  id!: number;
  title_id?: number;
  client_price?: number;
  company_name?: string;
  company_file_number?: string;
  company_client_name?: string;
  company_client_file_number?: string;
  search_type_tax_information_request?: number;
  search_type_copies_requested?: string;
  search_date_updated?: string;
  special_instructions?: string;
  interest_residential?: string;
  tract?: string;
  building?: string;
  acres?: string;
  metes_bound?: string;
  has_real_state?: number;
  has_civil?: number;
  has_probate_estate?: number;
  has_liens?: number;
  has_taxes?: number;
  is_open_section?: number;
  created_at!: Date;
  updated_at!: Date;

  // title_detail belongsTo titles via title_id
  title!: titles;
  getTitle!: Sequelize.BelongsToGetAssociationMixin<titles>;
  setTitle!: Sequelize.BelongsToSetAssociationMixin<titles, titlesId>;
  createTitle!: Sequelize.BelongsToCreateAssociationMixin<titles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof title_detail {
    title_detail.init({
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
      },
      unique: "FK_E0A76ABAA9F87BD"
    },
    client_price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    company_file_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    company_client_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    company_client_file_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    search_type_tax_information_request: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    search_type_copies_requested: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    search_date_updated: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    special_instructions: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    interest_residential: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tract: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    building: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    acres: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    metes_bound: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    has_real_state: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    has_civil: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    has_probate_estate: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    has_liens: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    has_taxes: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    is_open_section: {
      type: DataTypes.TINYINT,
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
    tableName: 'title_detail',
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
        name: "UNIQ_E0A76ABAA9F87BD",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "title_id" },
        ]
      },
    ]
  });
  return title_detail;
  }
}
