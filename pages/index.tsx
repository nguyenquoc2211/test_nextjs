'use client';
import Head from 'next/head'
import React from 'react'
import { Row, Col } from 'antd'
import Heading from 'components/Heading'
import Textarea from '../components/Textarea'
import Search from '../components/Search'
import Radio from "../components/Radio";
import TextField from '../components/TextField'

const sampleData = [
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
]

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
          <Col xs={24}>
            <Row gutter={[0, 16]}>
              <Col xs={24}>
                <div className={'heading-light'}>
                  <Row className={'h-full'} align={'middle'} justify={'space-between'}>
                    <Col>
                      <div className={'heading-style'}>
                        <div className={'btn-icon'} onClick={() => {}}>
                          <img src={'/list-thin.svg'} alt={'alt'}/>
                        </div>
                        <Heading level={1}>Home</Heading>
                      </div>
                    </Col>
                    <Col>
                      <div className={'heading-style'}>
                        <div className={'btn-icon'} onClick={() => {}}>
                          <img src={'/dots-three-outline-fill.svg'} alt={'img'}/>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={24} lg={12} className={'pd-16'}>
                <Row gutter={[0, 16]}>
                  <Col xs={24}>
                    <h2 className={'sales-text'}>
                      SALES INFORMATION
                    </h2>
                  </Col>
                  <Col xs={24}>
                    <TextField
                      label={{
                        text: 'Label'
                      }}
                      inputTypes={{
                        options: sampleData
                      }}
                    />
                  </Col>
                  <Col xs={24}>
                    <TextField
                      label={{
                        text: 'Label'
                      }}
                      inputTypes={[
                        {
                          options: sampleData,
                          size: {
                            lg: 12,
                            sm: 12,
                            xs: 12
                          }
                        },
                        {
                          options: sampleData,
                          size: {
                            lg: 12,
                            sm: 12,
                            xs: 12
                          }
                        }
                      ]}
                    />
                  </Col>
                  <Col xs={24}>
                    <TextField
                      label={{
                        text: 'Label'
                      }}
                      inputTypes={[
                        {
                          options: sampleData,
                          size: {
                            lg: 12,
                            sm: 8,
                            xs: 6
                          }
                        },
                        {
                          options: sampleData,
                          size: {
                            lg: 12,
                            sm: 16,
                            xs: 18
                          }
                        }
                      ]}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
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
                options={sampleData}
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
