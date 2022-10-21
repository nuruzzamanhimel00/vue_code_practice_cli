<template>
    <div>
        <div class="container-fluid text-left">
            <div class="row">
                <div class="col-md-6">
                    <div class="checklist-section my-5">
                        <!-- #### checklist-progress###### -->
                        <div class="checklist-progress">
                            <p class="checklist-parcent">CHECKLIST ( {{ getChecklistCompletedPercentage }} %)</p>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" 
                                :style="{
                                    width: getChecklistCompletedPercentage + '%'
                                }"
                                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                         <!-- #### checklist-progress (end) ###### -->

                         <!-- ###### checklist-list ########### -->
                        <div class="checklist-list my-3">
                            <ul class="list-group">
                                <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(Cklist, key) in taskForm.checkList" :key="key">
                                    <div class="form-check">
                                        <input
                                            @click="Cklist.check = ! Cklist.check"
                                            class="form-check-input" type="checkbox" 
                                            :value="Cklist.title"
                                            :checked="Cklist.check"
                                            :id="`defaultCheck-${key}`">

                                        <label class="form-check-label" :for="`defaultCheck-${key}`">
                                        
                                          {{ Cklist.title }}
                                        </label>
                                    </div>
                                    <button class="btn btn-danger btn-sm" @click.prevent="onRemoveCheckListItem(key)" >Delete</button>
                                </li>
                            </ul>
                        </div>

                        <!-- ######### checklist-list (end) ############ -->

                        <!-- ####### Add Check list ############ -->
                        <div class="checklist-field" v-if="addChecklistItem">
                            <div class="d-flex">
                                <input type="text" v-model="checkListTitle"> &nbsp;
                                <button class="btn btn-primary btn-sm" @click="onAddCheckListItem">Add</button> &nbsp;
                                <button class="btn btn-danger btn-sm"  @click.prevent="addChecklistItem = false">close</button>
                            </div>
                        </div>

                        <!-- ####### Add Check list(end) ############ -->
                        <div class="mt-2" v-if="!addChecklistItem">
                        <a href="" @click.prevent="addChecklistItem = true"  > + Add Checklist Item</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            addChecklistItem:false,
            checkListTitle:'',
            taskForm:{
                checkList:[
                    // {
                    //     check: true,
                    //     title: "Nuruzzaman Himel"
                    // },
                    // {
                    //     check: true,
                    //     title: "Nuruzzaman Himel 1"
                    // },
                ]
            },
            
        }
    },
    computed:{
        getChecklistCompletedPercentage(){
            if(this.taskForm.checkList.length > 0){
                let checkTrueLength = this.taskForm.checkList.filter(
                    (item) => item.check == true
                ).length;
                return Math.round(
                (checkTrueLength / this.taskForm.checkList.length) * 100
                );
            }
            return 0;
        }
    },
    methods:{
        onAddCheckListItem(){
            if(this.checkListTitle != null){
                let item = {
                    check: false,
                    title: this.checkListTitle
                }
                this.taskForm.checkList.push(item);
                this.checkListTitle = null;
            }
            
        },
        onRemoveCheckListItem(key){
            this.taskForm.checkList.splice(key,1);
        }
    }
}
</script>