<template>
  <div class="content">
    <Fieldset legend="Comment">
      <div class="comments-box">
        <div class="commentbox">
          <p class="author">
            Doctor: {{ patients.doctor_name }}
            <br />
            comment :
            {{ patients.doctor_comm }}
          </p>
        </div>
      </div>
      <div
          v-for="comment in comments"
          :key="comment.author"
          class="comments-box"
      >
        <div class="commentbox">
          <p class="author">
            Doctor: {{ comment.author }}
            <br />
            comment :
            {{ comment.content }}
          </p>
        </div>
      </div>
    </Fieldset>
    <br />
<!--    <Fieldset legend="Write comment">-->
<!--      <div class="commentbox">-->
<!--        <div class="comment-form">-->
<!--          <textarea-->
<!--              type="text"-->
<!--              v-model="content"-->
<!--              placeholder="You can write the comment here!"-->
<!--          ></textarea>-->
<!--          <label>-->
<!--            <input-->
<!--                type="text"-->
<!--                v-model="author"-->
<!--                v-on:keyup.enter="addComment"-->
<!--                placeholder="Docter name"-->
<!--            />-->
<!--          </label>-->
<!--          <Button-->
<!--              class="p-button p-component p-button-rounded"-->
<!--              @click="addComment"-->
<!--          >Add Comment</Button-->
<!--          >-->
<!--        </div>-->
<!--      </div>-->
<!--    </Fieldset>-->
  </div>
</template>
<script>
export default {
  props: ['patients'],
  inject: ['Store'],
  data() {
    return {
      // eslint-disable-next-line no-unused-vars
      comments: []
    }
  },
  methods: {
    addComment() {
      if (this.author && this.content) {
        this.comments.push({ author: this.author, content: this.content })
      } else {
        alert('Fields Empty')
      }
      this.Store.flashMessage = 'Your comment is successfully posted'
      setTimeout(() => {
        this.Store.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'DocterComment',
        params: { id: this.patients.id }
      })
    },

    removeComment(index) {
      this.comments.filter(index)
    }
  }
}
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}

#demo {
  margin: 20px 0 0 0;
}

.comment-form {
  display: block;
  width: 80%;
  margin: auto;
}

textarea {
  width: 90%;
  border: 2px solid #ccc;
  border-radius: 7px;
  height: 70px;
  font-family: Verdana, Helvetica, sans-serif;
  padding: 5px;
}

input {
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 5px;
}

button {
  color: rgb(255, 255, 255);
  border: 0;
  margin-top: 7px;
  margin-left: 2%;
  padding: 10px;
  cursor: pointer;
}

/*Comment Box*/

.comments-box {
  width: 90%;
  margin: auto;
  padding: 20px 0;
  border-bottom: 1px solid #000;
}

.delete {
  background: red;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  display: inline;
  padding: 3px;
}

.author {
  margin: 10px;
  font-weight: bold;
}
.content {
  width: 100%;
  margin-top: 23px;
  margin-left: 5%;
  margin-right: 9%;
}
.commentbox {
  width: 100%;
  text-align: left;
}
</style>
