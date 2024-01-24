<template>
    <form>
        <label>Email:</label>
        <input type="email" name="email" v-model="email">

        <label>Password:</label>
        <input type="password" name="password" v-model="password">

        <label>Role:</label>
        <select v-model="role">
            <option value="developer">Web DEV.</option>
            <option value="QA">Tester.</option>
            <option value="PMO">PMO</option>
        </select>

        <div class="terms">
            <input type="checkbox" v-model="terms" required>
            <label>Accept terms of use</label>
        </div>
    </form>
    
</template>
<script>
export default {
    data(){
        return {
            email: '',
            password: '',
            role: '',
            terms: true,

        }
    }
}
</script>
<style>
    p{
        color: black;
    }
    form{
        max-width: 420px;
        width: 100%;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    label{
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input, select{
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
    input[type="checkbox"]{
        display: inline-block;
        width: 16px;
        margin: 0 16px 0 0;
        position: relative;
        top: 2px;
    }
</style>