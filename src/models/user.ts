import { Table, Column,DataType, Model, HasMany } from "sequelize-typescript";
import Address from "./address"; 

@Table({
  tableName: "users",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export default class User extends Model {
    @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name!: string;
  
  @Column({
  type: DataType.STRING,
  unique: true,
  allowNull: false,
  validate: {
      isEmail: true, 
      notEmpty: true
    },
})
email!: string;

  @HasMany(() => Address)
  addresses!: Address[];
}
