<template>
   <div>
        <div style="margin-bottom:30px;width: 100%;background: white;">
            <div style="padding: 0 15px;display: flex;justify-content: space-between;align-items: center;height: 40px;">
              <div class="ns-kr" style="margin: 0 20px;font-size: 24px;color:black;font-weight: bold;">공유 받은 노트</div>
            </div>
        </div>
        <div v-if="isLoading" class="cont-isLoading">
          <div class="list-isLoading"></div>
        </div>
        <div v-else class="row" style="margin:0" ref="contents">
            <div class="col-xl-3 col-md-6 ani-card"  v-for="p in noteList" :key="p.no" >
            <stats-card-shared :title="p.title"
                        :note_id="p.note_id"
                        :summary="p.summary"
                        :updated_at="p.updated_at"
                        :created_at="p.created_at"
                        :color="p.color"
                        :is_shared="p.is_shared"
                        :num_of_share="p.num_of_share"
                        id="noteList"
                        v-on:openNote="openNote()">
            </stats-card-shared>
            </div>
        </div>
   </div>
</template>

<script>
import StatsCardShared from '../Cards/StatsCardShared'
import { mapState, mapMutations, mapActions } from 'vuex'
import { setTokenInHeader } from '../../api/api.js'
export default {
  components: {
    StatsCardShared,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  computed: {
    ...mapState([
      'user_id',
      'noteList',
      'token',
    ]),
    
  },
  created() {
    if(!this.user_id || !this.token){
      delete localStorage.user_id;
      delete localStorage.token;
      this.$router.replace('/');
    }
    else{
        setTokenInHeader(this.token);
        this.set_curDirectory('sharedNotes')
        this.fetch();
        this.$amplitude.setUserId(this.user_id);
        this.$amplitude.logEvent('sharedNotesList');
    }
  },
  methods: {
    ...mapMutations([
      'set_curDirectory',
    ]),
    ...mapActions([
      'FETCH_SHARED_LISTS',
      'CREATE_NOTE',
    ]),
    async fetch(){
      await this.FETCH_SHARED_LISTS()
      this.isLoading = false;
    },
    create_note(){
      this.CREATE_NOTE();
      this.$amplitude.setUserId(this.user_id);
      this.$amplitude.logEvent('Create_Note');
    }
  }
}
</script>

<style scoped>
</style>