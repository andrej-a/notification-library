import * as React from "react";
import { composeStories } from "@storybook/testing-react";
import { mount } from "@cypress/react18";
import * as stories from "../../src/stories/examples/button.stories.tsx";
import chaiColors from 'chai-colors';

chai.use(chaiColors);

const { TestAlert } = composeStories(stories);

beforeEach(() => {
    cy.viewport(1920, 1080)
})

describe('Components tests', () => {
    it("Should render notification type of alert", () => {
        mount(<TestAlert type={'error'} color={'#d22525'} />);
        cy.get('#test').click();
        cy.get('[data-test=alertion]')
            .should('have.css', 'background-color')
            .and('be.colored', '#d22525');
    });
    it("Should render notification type of warning", () => {
        mount(<TestAlert type={'warning'} color={'#ff9900'} />);
        cy.get('#test').click();
        cy.get('[data-test=alertion]')
            .should('have.css', 'background-color')
            .and('be.colored', '#ff9900');
    });
    it("Should render notification type of success", () => {
        mount(<TestAlert type={'success'} color={'#00cc2d'} />);
        cy.get('#test').click();
        cy.get('[data-test=alertion]')
            .should('have.css', 'background-color')
            .and('be.colored', '#00cc2d');
    });
    it("Should render notification type of error", () => {
        mount(<TestAlert type={'error'} color={'#d22525'} />);
        cy.get('#test').click();
        cy.get('[data-test=alertion]')
            .should('have.css', 'background-color')
            .and('be.colored', '#d22525');
    });
    it("Should render notification with correct properties", () => {
        mount(<TestAlert
            position={'top-left'}
            spawnAnimation={'smooth-sliding-in'}
            fadeAnimation={'fade-out'}
            type={'error'}
            visibleTime={5000}
            title={'Error title!'}
            description={'Error alert description!'}
            color={'#d22525'}
        />);
        cy.get('#test').click();
        cy.get('[data-test=alertion]')
            .should('have.css', 'background-color')
            .and('be.colored', '#d22525');
        cy.get('[data-test=alertion]')
            .contains('Error title!');
        cy.get('[data-test=alertion]')
            .contains('Error alert description!')
    });
});

describe('Spawn and fade test + functional', () => {
    it("Should render notification for 3 sec", () => {
        mount(<TestAlert visibleTime={3000} type={'warning'} color={'#ff9900'} />);
        cy.get('#test').click();
        cy.wait(1000);
        cy.get('[data-test=alertion]').should('exist');
        cy.wait(3000);
        cy.get('[data-test=alertion]').should('not.exist');
    });
    it("Should close notification by click", () => {
        mount(<TestAlert visibleTime={3000} type={'warning'} color={'#ff9900'} />);
        cy.get('#test').click();
        cy.wait(1000);
        cy.get('[data-test=alertion]').should('exist');
        cy.get('[data-test=alertion]').click();
        cy.get('[data-test=alertion]').should('not.exist');
    });
    it("Should render no more 3 notifications", () => {
        mount(<TestAlert visibleTime={5000} type={'warning'} color={'#ff9900'} />);
        cy.get('#test').click();
        cy.get('#test').click();
        cy.get('#test').click();
        cy.get('#test').click();
        cy.get('#test').click();
        cy.get('[data-test=alertion]').should("have.length", 3)
    });
})

