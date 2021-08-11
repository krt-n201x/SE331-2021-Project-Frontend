<template>
  <div>
    <div class="comment-form">    
        <textarea type="text" v-model="content" placeholder="Comment is here: with markdown"></textarea>
        <label>
          <input type="text" v-model="author" v-on:keyup.enter="addComment" placeholder="Author name here:">
        </label>
        <button @click="addComment">Add Comment</button>
   </div>
    <div v-for="comment in comments" :key="comment.author" class="comments-box">

         <p class="author">
           {{comment.author}}:
                 <br>
                {{comment.content}}
        </p>
        <!-- <p v-html="content | marked" class="content-comment"></p> -->
        <!-- <p v-on:click="removeComment($content)" class="delete">Delete</p> -->
    </div>
  </div>

</template>
<script>
export default {
    data() {
        return{
        // eslint-disable-next-line no-unused-vars
        comments:[]
        }
    },
    methods: {
        addComment() {
            if(this.author && this.content){
                this.comments.push({author: this.author, content: this.content})
            }else{
                alert('Fields Empty');
            }
        },
        
        removeComment(index){
            this.comments.filter(index);
        }
    }

}
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
}

#demo{
    margin: 20px 0 0 0;
}

.comment-form{
    display: block;
    width: 80%;
    margin: auto;
}

textarea{
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 7px;
    height: 70px;
    font-family: Verdana, Helvetica, sans-serif;
    padding: 5px;
}

input{
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 5px;
}

button{
    background: #333;
    color: #ccc;
    border: 0;
    padding: 5px;
    cursor: pointer;
}

/*Comment Box*/

.comments-box{
    width: 90%;
    margin: auto;
    padding: 20px 0;
    border-bottom: 1px solid #000;
}

.delete{
    background: red;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    display: inline;
    padding: 3px;
}

.author{
    margin: 10px 0;
    font-weight: bold;
}
</style>