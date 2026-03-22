import React from 'react'
import {
  FormContainer,
  FormRow,
  Label,
  Input,
  TextArea,
  Select,
  ScopeText,
  ButtonGroup,
  CancelButton,
  RegisterButton,
  PageWrapper
} from './AdminRegisterStyle'
import Header from '../AdminHeader/AdminHeaderComponent'

const ApplicationForm = () => {
  return (
    <PageWrapper>
      <Header />
      <FormContainer>
        <FormRow>
          <Label htmlFor="appName">Application Name :</Label>
          <Input id="appName" placeholder="Enter application name" />
        </FormRow>

        <FormRow>
          <Label htmlFor="description">Application Description :</Label>
          <TextArea id="description" placeholder="Enter description" />
        </FormRow>

        <FormRow>
          <Label htmlFor="type">Application Type :</Label>
          <Select id="type">
            <option>Self access application</option>
            <option>Private application</option>
            <option>Public application</option>
          </Select>
        </FormRow>

        <FormRow>
          <Label>Scope :</Label>
          <ScopeText>Seller_API</ScopeText>
        </FormRow>

        <FormRow>
          <Label htmlFor="redirect">Redirect URL :</Label>
          <Input id="redirect" placeholder="Enter redirect url" />
        </FormRow>

        <ButtonGroup>
          <CancelButton>Cancel</CancelButton>

          <RegisterButton>Register application</RegisterButton>
        </ButtonGroup>
      </FormContainer>
    </PageWrapper>
  )
}

export default ApplicationForm
