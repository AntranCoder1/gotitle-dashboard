import Sequelize, { DataTypes, Model, Optional } from "sequelize";
import type {
  payment_method_type,
  payment_method_typeId,
} from "./payment_method_type";
import type {
  profiles,
  profilesCreationAttributes,
  profilesId,
} from "./profiles";

export interface payment_methodAttributes {
  id: number;
  payment_method_type_id?: number;
  value?: string;
  created_at: Date;
  updated_at: Date;
}

export type payment_methodPk = "id";
export type payment_methodId = payment_method[payment_methodPk];
export type payment_methodCreationAttributes = Optional<
  payment_methodAttributes,
  payment_methodPk
>;

export class payment_method
  extends Model<payment_methodAttributes, payment_methodCreationAttributes>
  implements payment_methodAttributes
{
  id!: number;
  payment_method_type_id?: number;
  value?: string;
  created_at!: Date;
  updated_at!: Date;

  // payment_method hasOne profiles via payment_method_id
  profile!: profiles;
  getProfile!: Sequelize.HasOneGetAssociationMixin<profiles>;
  setProfile!: Sequelize.HasOneSetAssociationMixin<profiles, profilesId>;
  // payment_method belongsTo payment_method_type via payment_method_type_id
  payment_method_type!: payment_method_type;
  getPayment_method_type!: Sequelize.BelongsToGetAssociationMixin<payment_method_type>;
  setPayment_method_type!: Sequelize.BelongsToSetAssociationMixin<
    payment_method_type,
    payment_method_typeId
  >;
  createPayment_method_type!: Sequelize.BelongsToCreateAssociationMixin<payment_method_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof payment_method {
    payment_method.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        payment_method_type_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "payment_method_type",
            key: "id",
          },
        },
        value: {
          type: DataTypes.STRING(255),
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
        tableName: "payment_method",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
          {
            name: "IDX_7B61A1F62476A5D8",
            using: "BTREE",
            fields: [{ name: "payment_method_type_id" }],
          },
        ],
      }
    );
    return payment_method;
  }
}
