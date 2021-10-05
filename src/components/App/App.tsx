import React, {FC, useCallback, useEffect, useState} from 'react';
import {
    Code,
    Controller,
    Form,
    Header,
    InfoButton,
    Input,
    InputAutoSize,
    InputErrorMessage,
    Label,
    ModalsStorage,
    modalsStorageApi,
    Paragraph,
    RadioGroup,
    SubmitButton,
    TextArea,
    toast,
    Tooltip,
    useForm
} from '../../components';
import {ReactComponent as StarSVG} from '../../media/images/icons/star.svg';
import './App.scss';
import {useLocalStorage} from "../../helpers";
import {Response} from "express";

const App: FC = () => {
    const [remainedRequestsLimit, setRemainedRequestsLimit] = useState(30);
    const [isPersonalDataUsingAccepted, setIsPersonalDataUsingAccepted] = useLocalStorage('isPersonalDataUsingAccepted', false);
    useEffect(() => {
        if (!isPersonalDataUsingAccepted) {
            setTimeout(() => {
                modalsStorageApi.add(<div>
                    <Paragraph>App uses your browser local storage to preserve data of
                        some input fields to save your time.</Paragraph>
                    <strong>By staying in the app you agree to this.</strong>
                </div>);
                setIsPersonalDataUsingAccepted(true);
            }, 5000)
        }
    }, [isPersonalDataUsingAccepted, setIsPersonalDataUsingAccepted])
    type IFormElements = {
        amount: number;
        apiToken: string;
        notes: string;
        priority: number;
        separator: string;
        subtasks: string;
        title: string;
        type: string;
        userId: string;
    }
    const [userId, setUserId] = useLocalStorage('userId', '');
    const [apiToken, setApiToken] = useLocalStorage('apiToken', '');

    const {register, control, handleSubmit, formState: {errors}} = useForm<IFormElements>({
        defaultValues: {
            userId,
            apiToken
        }
    });

    const getSubtasks = useCallback((subtasks: string, separator: string) => {
        if (!separator) return null;
        return subtasks.split(separator).map((subtask) => subtask.trim());
    }, [])

    return <div className="app">
        <ModalsStorage/>
        <Tooltip/>
        <Header/>
        <div className="container">
            <h1>Habitica Subtasks Helper</h1>
            <Form action="" className="habitica-subtasks-helper-form" onChange={() => {
                console.log('change')
            }}
                  onSubmit={handleSubmit((data) => {
                      const {userId, apiToken, title: text, type, notes, priority, subtasks, separator, amount} = data;
                      setUserId(userId);
                      setApiToken(apiToken);
                      const headers = {
                          'Content-Type': 'application/json',
                          'x-client': '59322894-0bd9-45f1-af35-4ceffcd76fac-HabiticaSubtasksHelper',
                          'x-api-user': userId,
                          'x-api-key': apiToken,
                      };
                      const processedSubtasks = getSubtasks(subtasks, separator);
                      const body = JSON.stringify({
                          text,
                          type,
                          priority,
                          notes,
                          checklist: processedSubtasks
                      });
                      const promises: Promise<Response>[] = [];
                      let successfullRequests = 0;
                      for (let i = 0; i < amount; i++) {
                          promises.push(new Promise((resolve, reject) => {
                              void fetch('https://habitica.com/api/v3/tasks/user', {
                                  method: 'POST',
                                  headers,
                                  body
                              })
                                  .then(async (response) => {
                                      const responseBody = await response.json() as { data: { message: string }, success: string };
                                      if (!response.ok) reject(responseBody);
                                      const remainingRequestsAmount = Number(response.headers.get('X-RateLimit-Remaining'));
                                      const remainingRequestsAmountResetDate = new Date(response.headers.get('X-RateLimit-Reset'));
                                      setRemainedRequestsLimit(remainingRequestsAmount);
                                      setTimeout(() => {
                                          setRemainedRequestsLimit(30)
                                      }, remainingRequestsAmountResetDate.getTime() - new Date().getTime())
                                      successfullRequests++;
                                      resolve(responseBody);
                                  })
                          }));
                      }
                      Promise.all(promises)
                          .then(() => {
                              toast(<p>Success</p>, {type: 'success'});
                          })
                          .catch((error: { error: string; message: string }) => {
                              console.log(error);
                              if (error.error === "TooManyRequests") {
                                  toast(<p
                                      style={{wordBreak: 'break-word'}}>Requests limit reached. Successfully
                                      added: {successfullRequests}</p>, {
                                      type: 'error',
                                  })
                              } else {
                                  toast(<p
                                      style={{wordBreak: 'break-word'}}>{error.message}</p>, {
                                      type: 'error',
                                  })
                              }
                          })

                  })}>
                <div className="habitica-subtasks-helper-form__section">
                    <Label className="title__label" htmlFor="title">
                        Title
                    </Label>
                    <Input autoComplete="off"
                           className="title__input"
                           id="title"
                           name="title"
                           placeholder="The Venus Project Conception."
                           {...register('title', {required: 'Title is required'})}
                    />
                    {errors.title && <InputErrorMessage>{errors.title.message}</InputErrorMessage>}
                </div>
                <div className="habitica-subtasks-helper-form__section">
                    <Label className="subtasks__label" htmlFor="subtasks">
                        Subtasks
                    </Label>
                    <TextArea autoComplete="off"
                              className="subtasks__textarea"
                              id="subtasks"
                              placeholder={`What is the Venus Project?
								Aims
								Proposals
								FAQ
								Free e-Books
								Recommended books`}
                              rows={10}
                              wrap="soft"
                              {...register('subtasks')}
                    />

                </div>
                <div className="habitica-subtasks-helper-form__section">
                    <div className="label-section">
                        <Label className="separator__label label-section__label" htmlFor="separator">
                            Separator
                        </Label>
                        <InfoButton className="separator__info-button label-section__info-button" onClick={() => {
                            modalsStorageApi.add(<div>
                                <div>You can use any symbols or <Code>regular expression</Code> to separate your
                                    subtasks.
                                </div>
                                <b>Subtasks:</b> <Code>What is the Venus Project?;Aims;Proposals;FAQ</Code><br/>
                                <div><b>Separator:</b> <Code>;</Code></div>
                                <div><b>Result:</b></div>
                                <ul>
                                    <li>What is the Venus Project?</li>
                                    <li>Aims</li>
                                    <li>Proposals.</li>
                                    <li>FAQ.</li>
                                </ul>
                            </div>)
                        }}/>
                    </div>
                    <InputAutoSize autoComplete="off"
                                   className="separator__input"
                                   defaultValue=''
                                   id="separator"
                                   name="separator"
                                   placeholder="\n"
                                   {...register('separator')}
                    />
                </div>
                <div className="habitica-subtasks-helper-form__section">
                    <Label className="notes__label" htmlFor="notes">
                        Notes
                    </Label>
                    <TextArea autoComplete="off"
                              className="notes__textarea"
                              id="notes"
                              name="notes"
                              placeholder="Read it without any prejudices as any new ideas."
                              rows={10}
                              wrap="soft"
                              {...register('notes')}
                    />
                </div>
                <div className="habitica-subtasks-helper-form__section priority">
                    <Label htmlFor="priority1">Difficulty</Label>
                    <Controller control={control}
                                defaultValue={1}
                                name="priority"
                                render={({field: {onChange, value, name}}) => <RadioGroup
                                    className="priority__radio-group"
                                    name={name}
                                    radiosData={[
                                        {
                                            value: 0.1,
                                            children: <StarSVG/>,
                                            id: 'priority0.1'
                                        },
                                        {
                                            value: 1,
                                            children: <>
                                                <StarSVG/><StarSVG/></>,
                                            id: 'priority1'
                                        },
                                        {
                                            value: 1.5,
                                            children: <>
                                                <StarSVG/><StarSVG/><StarSVG/></>,
                                            id: 'priority1.5'
                                        },
                                        {
                                            value: 2,
                                            children: <>
                                                <StarSVG/><StarSVG/><StarSVG/><StarSVG/></>,
                                            id: 'priority2'
                                        }
                                    ]}
                                    value={value}
                                    onChange={(event) => onChange(parseFloat(event.currentTarget.value))}
                                />} rules={{required: 'Difficult is required'}}/>
                </div>
                <div className="habitica-subtasks-helper-form__section">
                    <Label htmlFor="todo">Type</Label>
                    <Controller control={control}
                                defaultValue='todo'
                                name="type"
                                render={({field: {onChange, value, name}}) => <RadioGroup
                                    className="type__radio-group type-radio-group"
                                    name={name}
                                    radiosData={[
                                        {value: 'todo', children: "Todo", id: "task-type-todo"},
                                        {value: 'daily', children: "Daily", id: "task-type-daily"},
                                        {value: 'habit', children: "Habit", id: "task-type-habit"},
                                    ]}
                                    value={value}
                                    onChange={onChange}
                                />} rules={{required: 'Type is required'}}/>
                </div>
                <div className="habitica-subtasks-helper-form__section habitica-subtasks-helper-form-section">
                    <div className="label-section">
                        <Label className="amount__label" htmlFor="amount">
                            Amount
                        </Label>
                        <InfoButton data-effect="solid"
                                    data-place="top"
                                    data-tip="You can add the same task multiple times. Limit is 30 per minute"/>
                    </div>
                    <Input
                        autoComplete="off"
                        className="amount__input"
                        defaultValue={1}
                        id="amount"
                        name="amount"
                        placeholder="1"
                        type="number"
                        {...register('amount', {
                            valueAsNumber: true, validate: (value) => {
                                if (Number.isNaN(value)) return 'Value must be a number';
                            },
                            max: {
                                value: remainedRequestsLimit,
                                message: `Remained requests limit is ${remainedRequestsLimit}`
                            },
                            min: {value: 1, message: 'Min value is 1'}
                        })}
                    />
                    {errors.amount && <InputErrorMessage>{errors.amount.message}</InputErrorMessage>}
                </div>
                <div className="habitica-subtasks-helper-form__section">
                    <div className="label-section">
                        <Label className="label-section__label" htmlFor="userId">
                            User ID
                        </Label>
                        <InfoButton className="label-section__info-button" onClick={() => {
                            window.open('https://habitica.com/user/settings/api', '_blank').focus()
                        }}/>
                    </div>
                    <Input autoComplete="off" id="userId"
                           name="userId" {...register('userId', {required: 'User ID is required'})} />
                    {errors.userId && <InputErrorMessage>{errors.userId.message}</InputErrorMessage>}
                </div>
                <div className="habitica-subtasks-helper-form__section">
                    <div className="label-section">
                        <Label className="label-section__label" htmlFor="apiToken">
                            API Token:
                        </Label>
                        <InfoButton className="label-section__info-button" onClick={() => {
                            window.open('https://habitica.com/user/settings/api', '_blank').focus()
                        }}/>
                    </div>

                    <Input autoComplete="off"
                           id="apiToken"
                           name="apiToken" {...register('apiToken', {required: 'API token is required'})} />
                    {errors.apiToken && <InputErrorMessage>{errors.apiToken.message}</InputErrorMessage>}
                </div>
                <div className="submit-section">
                    <SubmitButton className={`submit-button`} data-disabled={remainedRequestsLimit === 0}
                                  data-effect="solid"
                                  data-place="top" data-tip="Requests limit reached"
                                  data-tip-disable={remainedRequestsLimit !== 0}
                                  data-type="error">
                        Create
                    </SubmitButton>
                </div>
            </Form>
        </div>
    </div>;
}
export default App;