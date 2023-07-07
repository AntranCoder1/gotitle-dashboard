import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { title_works, title_worksId } from './title_works';

export interface title_work_db_imageAttributes {
  id: number;
  title_work_id?: number;
  image_data?: string;
  office_company_id?: number;
  office_company_name?: string;
  office_user_id?: number;
  office_user_email?: string;
  office_title_work_id?: number;
  stripe_response?: string;
  status?: string;
  date_accept?: string;
  created_at: Date;
  updated_at: Date;
}

export type title_work_db_imagePk = "id";
export type title_work_db_imageId = title_work_db_image[title_work_db_imagePk];
export type title_work_db_imageCreationAttributes = Optional<title_work_db_imageAttributes, title_work_db_imagePk>;

export class title_work_db_image extends Model<title_work_db_imageAttributes, title_work_db_imageCreationAttributes> implements title_work_db_imageAttributes {
  id!: number;
  title_work_id?: number;
  image_data?: string;
  office_company_id?: number;
  office_company_name?: string;
  office_user_id?: number;
  office_user_email?: string;
  office_title_work_id?: number;
  stripe_response?: string;
  status?: string;
  date_accept?: string;
  created_at!: Date;
  updated_at!: Date;

  // title_work_db_image belongsTo title_works via title_work_id
  title_work!: title_works;
  getTitle_work!: Sequelize.BelongsToGetAssociationMixin<title_works>;
  setTitle_work!: Sequelize.BelongsToSetAssociationMixin<title_works, title_worksId>;
  createTitle_work!: Sequelize.BelongsToCreateAssociationMixin<title_works>;

  static initModel(sequelize: Sequelize.Sequelize): typeof title_work_db_image {
    title_work_db_image.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title_work_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'title_works',
        key: 'id'
      }
    },
    image_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    office_company_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    office_company_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    office_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    office_user_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    office_title_work_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stripe_response: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_accept: {
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
    tableName: 'title_work_db_image',
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
        name: "IDX_D4332FACF9486AA2",
        using: "BTREE",
        fields: [
          { name: "title_work_id" },
        ]
      },
    ]
  });
  return title_work_db_image;
  }
}
