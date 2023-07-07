import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface easement_typesAttributes {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export type easement_typesPk = "id";
export type easement_typesId = easement_types[easement_typesPk];
export type easement_typesCreationAttributes = Optional<easement_typesAttributes, easement_typesPk>;

export class easement_types extends Model<easement_typesAttributes, easement_typesCreationAttributes> implements easement_typesAttributes {
  id!: number;
  name!: string;
  created_at!: Date;
  updated_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof easement_types {
    easement_types.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    tableName: 'easement_types',
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
    ]
  });
  return easement_types;
  }
}
