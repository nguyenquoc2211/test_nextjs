'use client';
import Head from 'next/head'
import React from 'react'
import { Row, Col } from 'antd'
import Heading from 'components/Heading'
import Textarea from '../components/Textarea'
import Search from '../components/Search'
import Radio from "../components/Radio";
export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home page</title>
        <meta name={'description'} content={'Only test NextJS'}/>
      </Head>
      <div className={'body'}>
        <Row gutter={[0, 40]}>
          {/* Typography */}
          <Col xs={24}>
            <div className={'title'}>
              <h1 className={'typography black-primary'}>Input</h1>
            </div>
          </Col>
          {/* Text Field */}
          <Col xs={24}>
            <Heading level={0} textClassName={'black-primary'}>Text field</Heading>
          </Col>
          {/* Text Area */}
          <Col xs={24}>
            <Heading level={0} textClassName={'black-primary'}>Text area</Heading>
          </Col>
          <Col xs={24}>
            <div className={'text-area-pane'}>
              <Textarea
                label={{
                  text: 'Label',
                }}
                disabled={false}
              />
            </div>
          </Col>
          <Col xs={24}>
            <Heading level={0} textClassName={'black-primary'}>Search field</Heading>
          </Col>
          <Col xs={24}>
            <div className={'search-pane'}>
              <Search
                label={{ text: 'Label' }}
                type={'multi'}
                options={[
                  {
                    label: 'Jack 100 củ',
                    value: 'jack_100_mil'
                  },
                  {
                    label: 'Anthony',
                    value: 'anthony'
                  },
                  {
                    label: 'Harry mắc hài',
                    value: 'maguire'
                  }
                ]}
              />
            </div>
          </Col>
          <Col xs={24}>
            <Heading level={0} textClassName={'black-primary'}>Radio field</Heading>
          </Col>
          <Col xs={24}>
            <Radio
              label={{ text: 'Label' }}
              options={[
                {
                  label: 'Label 1',
                  value: 'label1'
                },
                {
                  label: 'Label 2',
                  value: 'label2'
                },
                {
                  label: 'Label 3',
                  value: 'label3'
                },
                {
                  label: 'Label 4',
                  value: 'label4'
                },
              ]}
            />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}
