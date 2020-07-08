<script>
    import Textfield from '@smui/textfield'
    import Paper, {Title, Subtitle, Content} from '@smui/paper';
    import Button, {Group, GroupItem, Label, Icon} from '@smui/button';
    import { fade } from 'svelte/transition';
    export let loginOrRegister = false;
</script>
<div class="container-fluid" in:fade>
    <div class="row">
        <div class="col align-self-start"></div>
        <div class="align-self-center col-3">
            <Paper  elevation="5">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <Title>Register</Title>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
        <div class="col align-self-end"></div>
    </div>
</div>
