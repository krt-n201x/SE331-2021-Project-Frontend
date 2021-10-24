<template>
  <div class="content">
    <Fieldset legend="Comment">
      <div class="comments-box">
        <div class="commentbox">
          <p class="author">
            Doctor: {{ patients.doctor.name }}
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
    <Form @submit="addComment" :validation-schema="schema">
      <div v-if="!successful">
        <div class="form-group">
          <label for="comment">Comment</label>
          <Field name="comment" type="text" class="form-control" />
          <ErrorMessage name="comment" class="error-feedback" />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            Add Comment
          </button>
        </div>
      </div>
    </Form>
    <!-- <Fieldset legend="Write comment">
        <div class="commentbox">
        <div class="comment-form">    
        <textarea type="text" v-model="comment" placeholder="You can write the comment here!"></textarea>
        <Button class="p-button p-component p-button-rounded" @click="addComment">Add Comment</Button>
        </div>   
        </div>
   </Fieldset> -->
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import DatabaseService from '@/services/DatabaseService.js'
export default {
    props: ['patients', 'doctor'],
    components: {
    Form,
    Field,
    ErrorMessage
  },
  // eslint-disable-next-line
  inject: ['Store'],
  data() {
      const schema = yup.object().shape({
      comment: yup
        .string()
    })
    return {
      successful: false,
      message: '',
      schema
    }
  },
    methods: { 
        addComment(patient) {
            this.message = ''
             this.successful = false
            DatabaseService.saveComment(patient, this.patients.id)
            .then(() => {
            location.reload()
            })
             .catch(() => {
             this.message = 'could not register'
            })
            this.Store.flashMessage =
            'Your comment is successfully posted'
            setTimeout(() => {
            this.Store.flashMessage = ''
            }, 3000)
            this.$router.push({
                name: 'DoctorComment',
            params: { id: this.patients.id }
            })
        },
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