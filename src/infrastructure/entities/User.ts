import { Entity, Column, PrimaryGeneratedColumn,BaseEntity,CreateDateColumn,UpdateDateColumn} from "typeorm"

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         userId:
 *           type: serial
 *         username:
 *           type: string
 *           example: rguzman
 *         phone:
 *           type: string
 *           example: 1122456790
 *         email:
 *           type: string
 *           example: rguzman@example.com
 *         fullname: 
 *           type: string
 *           example: luis rodrigo guzman
 *         createdAt:
 *           type: datetime
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt:
 *           type: datetime
 *           example: 4/20/2022, 2:21:56 PM
 */

@Entity()
export default class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    userId:number;

    @Column({unique:true})
    username:string;

    @Column()
    phone:string;

    @Column({unique:true})
    email:string;

    @Column()
    fullName:string;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

}