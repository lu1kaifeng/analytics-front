<script>
    import "reflect-metadata";
    import {container} from "tsyringe";
    import Textfield from '@smui/textfield'
    import Router,{wrap,push,pop} from 'svelte-spa-router'
    import Paper, {Title, Subtitle} from '@smui/paper';
    import Button, {Group, GroupItem, Label, Icon} from '@smui/button';
    import LinearProgress from '@smui/linear-progress';
    import {fade} from 'svelte/transition';
    import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
    import {SubjectStore} from "../../store/SubjectStore";
    import SubjectClient from "../../client/SubjectClient";
    import {Subject} from "../../model/Subject";

    export let loginOrRegister = true;
    let userName = "";
    let password = "";
    let credentialInvalid = false;
    let loading = false;
    let loginPromise;

    let subjectClient = container.resolve(SubjectClient)

    $: enableLogin = userName !== '' && password !== '';

    $: if (userName !== "" || password !== "") credentialInvalid = false;

    async function login() {
        try {
            loading = true;
            let token = (await subjectClient.login(userName, password));
            let obj = new Subject(token, null);
            SubjectStore.persist(obj);
            let subject = (await subjectClient.getObject(token)).data;
            obj = new Subject(token, subject);
            SubjectStore.persist(obj);
            pop()
        } catch (error) {
            credentialInvalid = true;
            userName = "";
            password = "";
        } finally {
            loading = false;
        }
    }
</script>
<div class="container-fluid" in:fade>
    <div class="row">
        <div class="col align-self-start"></div>
        <div class="align-self-center col-3">
            <Card elevation="5" >
                {#if loading}
                            <LinearProgress indeterminate  style="border-top-left-radius:1em;border-top-right-radius:1em"/>
                {/if}
                <div class="container-fluid padded-container">
                    <div class="row">
                        <div class="col">
                            <Title>Login</Title>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <Textfield
                                    fullwidth
                                    type="text"
                                    invalid={credentialInvalid || loading}
                                    bind:value={userName}
                                    label={credentialInvalid?'Wrong User Name':'User Name'}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <Textfield
                                    fullwidth
                                    type="password"
                                    invalid={credentialInvalid || loading}
                                    bind:value={password}
                                    label={credentialInvalid?"Wrong Password":"Password"}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div  class="float-right">
                                <Button class="padded" variant="outlined" on:click={()=>loginOrRegister = false}><Label>Register</Label></Button>
                                <Button variant="raised" disabled={credentialInvalid  || loading || credentialInvalid || !enableLogin} on:click={()=>loginPromise = login()}><Label>Login</Label></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
        <div class="col align-self-end"></div>
    </div>
</div>
<style>

    .padded-container{
        padding: 1em;
    }

    .cloaked{
        visibility: hidden
    }
</style>
