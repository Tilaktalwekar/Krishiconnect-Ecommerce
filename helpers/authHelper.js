import bcrypt from 'bcrypt'

export const hashPassword = async(password) => {
    try {
        const saltRounds = 10;
        const hashedpassword = await bcrypt.hash(password,saltRounds);
        return hashedpassword;
    } catch (error) {
        console.log(error);
    }
};

export const comparePassword = async(password,hashedpassword)=>{
    return bcrypt.compare(password,hashedpassword);
}