import mongoose , { Schema } from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, "Email is required for creating a user."],
            trim: true,
            lowercase: true,
            match: [/^ [a - zA - Z0 -9._ % +-] + @[a - zA - Z0 - 9. -] +\\.[a - zA - Z]{ 2, }$/, "Invalid email address."],
            unique: [true,"Email already exist"]
        },
        name: {
            type: String,
            required: [true, "Name is required for creating an account."],
        },
        password: {
            type: String,
            required: [true,"Password is required for creating an account."],
            minlength: [6, "password should contain more than 6 character."]
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function(){
    if(!this.isModified("password")) return;

    this.password = bcrypt.hash(this.password, 10)
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}

const User = mongoose.model("User", userSchema);

export default User;