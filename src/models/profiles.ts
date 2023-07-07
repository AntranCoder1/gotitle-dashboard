import Sequelize, { DataTypes, Model, Optional } from "sequelize";
import type { locations, locationsId } from "./locations";
import type { payment_method, payment_methodId } from "./payment_method";
import type { users, usersCreationAttributes, usersId } from "./users";

export interface profilesAttributes {
  id: number;
  company_name?: string;
  location_id?: number;
  created_at: Date;
  updated_at: Date;
  w9_policy?: string;
  errors_insurance?: string;
  payment_method_id?: number;
}

export type profilesPk = "id";
export type profilesId = profiles[profilesPk];
export type profilesCreationAttributes = Optional<
  profilesAttributes,
  profilesPk
>;

export class profiles
  extends Model<profilesAttributes, profilesCreationAttributes>
  implements profilesAttributes
{
  id!: number;
  company_name?: string;
  location_id?: number;
  created_at!: Date;
  updated_at!: Date;
  w9_policy?: string;
  errors_insurance?: string;
  payment_method_id?: number;

  // profiles belongsTo locations via location_id
  location!: locations;
  getLocation!: Sequelize.BelongsToGetAssociationMixin<locations>;
  setLocation!: Sequelize.BelongsToSetAssociationMixin<locations, locationsId>;
  createLocation!: Sequelize.BelongsToCreateAssociationMixin<locations>;
  // profiles belongsTo payment_method via payment_method_id
  payment_method!: payment_method;
  getPayment_method!: Sequelize.BelongsToGetAssociationMixin<payment_method>;
  setPayment_method!: Sequelize.BelongsToSetAssociationMixin<
    payment_method,
    payment_methodId
  >;
  createPayment_method!: Sequelize.BelongsToCreateAssociationMixin<payment_method>;
  // profiles hasOne users via profile_id
  user!: users;
  getUser!: Sequelize.HasOneGetAssociationMixin<users>;
  setUser!: Sequelize.HasOneSetAssociationMixin<users, usersId>;

  static initModel(sequelize: Sequelize.Sequelize): typeof profiles {
    profiles.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        company_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        location_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "locations",
            key: "id",
          },
          unique: "FK_8B30853064D218E",
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        w9_policy: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        errors_insurance: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        payment_method_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "payment_method",
            key: "id",
          },
          unique: "FK_8B3085305AA1164F",
        },
      },
      {
        sequelize,
        tableName: "profiles",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
          {
            name: "UNIQ_8B30853064D218E",
            unique: true,
            using: "BTREE",
            fields: [{ name: "location_id" }],
          },
          {
            name: "UNIQ_8B3085305AA1164F",
            unique: true,
            using: "BTREE",
            fields: [{ name: "payment_method_id" }],
          },
        ],
      }
    );
    return profiles;
  }
}
