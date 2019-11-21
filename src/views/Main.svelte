<script lang="ts">
    import {push} from 'svelte-spa-router';
    import {
        Jumbotron, Button, Card, CardBody, CardFooter, CardHeader, CardImg, CardText, CardTitle, Badge, Row, Col, ListGroup, ListGroupItem 
    } from "sveltestrap";
    const guideLists: Object = [
        { name: 'REACTIVITY', url: 'reactivity' },
        { name: 'PROPS', url: 'props' },
        { name: 'LOGIC', url: 'logic' },
        { name: 'EVENTS', url: 'events' },
        { name: 'BINDINGS', url: 'bindings' },
        { name: 'LIFECYCLE', url: 'lifecycle' },
        { name: 'STORES', url: 'stores' },
        { name: 'MOTION', url: 'motion' },
        { name: 'TRANSITIONS', url: 'transitions' },
        { name: 'ANIMATIONS', url: 'animations' },
        { name: 'COMPONENT COMPOSITION', url: 'component' },
        { name: 'SPECIAL ELEMENTS', url: 'special' },
        { name: 'DEBUGGING', url: 'degugging' }

    ];
</script>

<div class="p-3">
    <!-- <Jumbotron>
        <h1 class="display-6">Svelte + Typescript + Rollup</h1>
        <p>
            현재 Angular, React, Vue가 프론트엔드 프레임워크를 장악하고 있으며 이미 많은 기업에서 사용중이다.<br />
            W3C Conference 2019에서 소개된 Svelte가 소개 되었고 앞으로 많은 지금까지 사용한 프레임워크보다 장점이 많은 것 같아 간단한 가이드 문서를 제작해 본다.<br />
            진입 장벽이 다른 프레임워크보다 쉽다는 점이 있어 평소에 관심을 두고있던 Typescript 도입도 동시에 진행해 본다.<br />
        </p>
    </Jumbotron> -->
    <Row class="mb-2">
        <Col style="text-align:right;">
            <Badge color="danger">Svelte</Badge>
            <Badge color="dark" style="background-color:#294E80;">TypeScript</Badge>
            <Badge color="dark" style="background-color:#d885af;">Scss</Badge>
            <Badge color="dark" style="background-color:#563d7c;">Bootstrap</Badge>
        </Col>
    </Row>
    <Card class="mb-3">
        <CardHeader>
            <CardTitle class="mb-0">
                Svelte Project
            </CardTitle>
        </CardHeader>
        <CardBody>
            <CardText>
                <ListGroup>
                    <ListGroupItem tag="a" href="#/todo" action>TodoList</ListGroupItem>
                </ListGroup>
            </CardText>
        </CardBody>
    </Card>
    <Card class="mb-3">
        <CardHeader>
            <CardTitle class="mb-0">
                Svelte Guide
            </CardTitle>
        </CardHeader>
        <CardBody>
            <ListGroup>
                {#each guideLists as {name, url}, i}
                <ListGroupItem tag="a" href="#/{url}" action>{name}</ListGroupItem>
                {/each}
            </ListGroup>
        </CardBody>
    </Card>
</div>
