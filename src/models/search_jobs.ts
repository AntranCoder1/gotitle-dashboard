import Sequelize, { DataTypes, Model, Optional } from "sequelize";
import type { locations, locationsId } from "./locations";
import type { titles, titlesCreationAttributes, titlesId } from "./titles";
import type { users, usersId } from "./users";

export interface search_jobsAttributes {
  id: number;
  location_id?: number;
  claimant_id?: number;
  location_name: string;
  search_type: string;
  search_type_detail: string;
  search_type_detail_value?: string;
  copies_type: string;
  copies: string;
  note?: string;
  created_at: Date;
  updated_at: Date;
  seller_name?: string;
  buyer_name?: string;
  sub_total?: number;
  full_copies?: number;
  total?: number;
  assigned_user_id?: number;
  status: string;
  status_date?: string;
}

export type search_jobsPk = "id";
export type search_jobsId = search_jobs[search_jobsPk];
export type search_jobsCreationAttributes = Optional<
  search_jobsAttributes,
  search_jobsPk
>;

export class search_jobs
  extends Model<search_jobsAttributes, search_jobsCreationAttributes>
  implements search_jobsAttributes
{
  id!: number;
  location_id?: number;
  claimant_id?: number;
  location_name!: string;
  search_type!: string;
  search_type_detail!: string;
  search_type_detail_value?: string;
  copies_type!: string;
  copies!: string;
  note?: string;
  created_at!: Date;
  updated_at!: Date;
  seller_name?: string;
  buyer_name?: string;
  sub_total?: number;
  full_copies?: number;
  total?: number;
  assigned_user_id?: number;
  status!: string;
  status_date?: string;

  // search_jobs belongsTo locations via location_id
  location!: locations;
  getLocation!: Sequelize.BelongsToGetAssociationMixin<locations>;
  setLocation!: Sequelize.BelongsToSetAssociationMixin<locations, locationsId>;
  createLocation!: Sequelize.BelongsToCreateAssociationMixin<locations>;
  // search_jobs hasOne titles via search_job_id
  title!: titles;
  getTitle!: Sequelize.HasOneGetAssociationMixin<titles>;
  setTitle!: Sequelize.HasOneSetAssociationMixin<titles, titlesId>;
  // search_jobs belongsTo users via claimant_id
  claimant!: users;
  getClaimant!: Sequelize.BelongsToGetAssociationMixin<users>;
  setClaimant!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createClaimant!: Sequelize.BelongsToCreateAssociationMixin<users>;
  // search_jobs belongsTo users via assigned_user_id
  assigned_user!: users;
  getAssigned_user!: Sequelize.BelongsToGetAssociationMixin<users>;
  setAssigned_user!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createAssigned_user!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof search_jobs {
    search_jobs.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        location_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "locations",
            key: "id",
          },
          unique: "FK_F38978AC64D218E",
        },
        claimant_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "users",
            key: "id",
          },
        },
        location_name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        search_type: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        search_type_detail: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        search_type_detail_value: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        copies_type: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        copies: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        note: {
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
        seller_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        buyer_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        sub_total: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        full_copies: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        total: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        assigned_user_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "users",
            key: "id",
          },
        },
        status: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        status_date: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "search_jobs",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
          {
            name: "UNIQ_F38978AC64D218E",
            unique: true,
            using: "BTREE",
            fields: [{ name: "location_id" }],
          },
          {
            name: "IDX_F38978AC9F409843",
            using: "BTREE",
            fields: [{ name: "claimant_id" }],
          },
          {
            name: "IDX_F38978ACADF66B1A",
            using: "BTREE",
            fields: [{ name: "assigned_user_id" }],
          },
        ],
      }
    );
    return search_jobs;
  }
}
