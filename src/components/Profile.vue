<template>
    <div class="profile-page">
            <div class="container">
                <div class="card" style="box-shadow: 0 0 1rem 0 rgba(0,0,0,.05)!important;border: 1px solid rgba(0,0,0,.05);background: #F0F0F0;">
                    <div class="px-4">
                        <div class="text-center mt-5">
                            <div class="photo-container">
                                <img style="width: 100%;" :src="user_picture_url" lazy="loaded">
                            </div>
                            <h1 style="margin-top: 20px">{{user_name}}</h1>
                            <!-- <div class="h6"><i class="ni location_pin mr-2"></i>SEOUL</div> -->
                            <div class="mt-4">{{user_email}}</div>
                            <!-- <div><i class="ni education_hat mr-2"></i>University of Computer Science</div> -->
                        </div>
                        
                        <div class="mt-5 py-5 text-center" style="border-top: 1px solid #e4e4e4 !important;">
                          <div class="row justify-content-center">
                            <!-- <div class="col-lg-4 order-lg-1"> -->
                                <div class="card-profile-stats d-flex justify-content-center ns-kr">
                                    <div>
                                        <div class="txt2">{{(Math.floor(user_audio_usage/3600))}}:{{ Math.floor(((user_audio_usage%3600)/60)) }}</div>
                                        <div class="txt1">녹음 시간</div>
                                    </div>
                                    <div>
                                        <div class="txt2">{{user_num_of_notes}}</div>
                                        <div class="txt1">작성한 노트</div>
                                    </div>
                                    <div>
                                        <div class="txt2">{{user_num_of_sharing}}</div>
                                        <div class="txt1">공유한 노트</div>
                                    </div>
                                    <div>
                                        <div class="txt2">{{user_num_of_shared}}</div>
                                        <div class="txt1">공유받은 노트</div>
                                    </div>
                                </div>
                            <!-- </div> -->
                        </div>
                            <!-- <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>i'm ......</p>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState([
        'user_name',
        'user_email',
        'user_picture_url',
        'user_audio_usage',
        'user_num_of_notes',
        'user_num_of_shared',
        'user_num_of_sharing',
        'user_id',
        ]),
    },
    data() {
        return {
        }
    },
    created() {
        this.FETCH_USAGE();     
        this.$amplitude.setUserId(this.user_id);
        this.$amplitude.logEvent('Profile');   
    },
    methods: {
        ...mapActions([
            'FETCH_USAGE',
        ]),
    }
}
</script>

<style>
.photo-container {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: 0 10px 25px 0 rgba(0,0,0,.3);
}
.txt1{
    font-size: 14px;
    color: #adb5bd;
}
.txt2{
    font-size: 18px;
    font-weight: bold;
}
</style>