import React, { useState } from 'react';
import styled from 'styled-components';
import { FiX, FiHeadphones, FiSend, FiUser, FiMail, FiMessageSquare, FiPhone, FiAlertCircle } from 'react-icons/fi';
import apiLogger from '../utils/apiLogger';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  animation: slideInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ModalHeader = styled.div`
  padding: 24px 24px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 24px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ModalCloseButton = styled.button`
  background: none;
  border: none;
  color: #95a5a6;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #f8f9fa;
    color: #2c3e50;
  }
`;

const ModalBody = styled.div`
  padding: 0 24px 24px 24px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #2c3e50;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 14px;
  min-height: 120px;
  resize: vertical;
  transition: all 0.2s ease;
  box-sizing: border-box;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px 20px;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #2980b9, #1c5aa3);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ContactInfo = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-top: 20px;
  border: 1px solid #e9ecef;
`;

const ContactTitle = styled.h4`
  margin: 0 0 12px 0;
  color: #2c3e50;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #5a6c7d;

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    color: #3498db;
  }
`;

const ErrorMessage = styled.div`
  background: #fee;
  color: #c33;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #fcc;
`;

const SuccessMessage = styled.div`
  background: #efe;
  color: #3a3;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #cfc;
`;

const CustomerServiceModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    contactType: 'email',
    category: 'bug',
    subject: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const categories = [
    { value: 'bug', label: '🐛 Bug反馈' },
    { value: 'feature', label: '💡 功能建议' },
    { value: 'question', label: '❓ 使用问题' },
    { value: 'cooperation', label: '🤝 商务合作' },
    { value: 'other', label: '📝 其他反馈' }
  ];

  const contactTypes = [
    { value: 'email', label: '📧 邮箱' },
    { value: 'phone', label: '📱 手机' },
    { value: 'qq', label: '🐧 QQ' },
    { value: 'wechat', label: '💬 微信' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 清除错误信息
    if (error) setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('请输入您的姓名');
      return false;
    }
    if (!formData.contact.trim()) {
      setError('请输入联系方式');
      return false;
    }
    if (!formData.subject.trim()) {
      setError('请输入反馈主题');
      return false;
    }
    if (!formData.description.trim()) {
      setError('请详细描述您的问题或建议');
      return false;
    }

    // 验证联系方式格式
    if (formData.contactType === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.contact)) {
        setError('请输入有效的邮箱地址');
        return false;
      }
    } else if (formData.contactType === 'phone') {
      const phoneRegex = /^1[3-9]\d{9}$/;
      if (!phoneRegex.test(formData.contact.replace(/\s|-/g, ''))) {
        setError('请输入有效的手机号码');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // 记录到日志系统
      await apiLogger.logApiCall(
        'customer_feedback',
        'internal_system',
        true,
        0,
        null,
        {
          feedback_type: 'customer_service',
          category: formData.category,
          subject: formData.subject,
          name: formData.name,
          contact_type: formData.contactType,
          contact: formData.contact,
          description: formData.description,
          timestamp: new Date().toISOString(),
          user_agent: navigator.userAgent,
          page_url: window.location.href
        }
      );

      setSuccess(true);
      
      // 3秒后自动关闭弹窗
      setTimeout(() => {
        onClose();
      }, 3000);

    } catch (error) {
      console.error('提交反馈失败:', error);
      setError('提交失败，请稍后重试或直接联系我们的客服');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <ModalTitle>
              <FiHeadphones />
              反馈提交成功
            </ModalTitle>
            <ModalCloseButton onClick={onClose}>
              <FiX size={20} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <SuccessMessage>
              <FiHeadphones />
              感谢您的反馈！我们已收到您的问题，会尽快处理并回复您。
            </SuccessMessage>
            <ContactInfo>
              <ContactTitle>
                <FiHeadphones />
                紧急联系方式
              </ContactTitle>
              <ContactItem>
                <FiMail />
                邮箱：3639163969@qq.com
              </ContactItem>
              <ContactItem>
                <FiUser />
                QQ：3639163969
              </ContactItem>
              <ContactItem>
                <FiMessageSquare />
                微信：BigFe5
              </ContactItem>
            </ContactInfo>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    );
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>
            <FiHeadphones />
            客服反馈
          </ModalTitle>
          <ModalCloseButton onClick={onClose}>
            <FiX size={20} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            {error && (
              <ErrorMessage>
                <FiAlertCircle />
                {error}
              </ErrorMessage>
            )}

            <FormGroup>
              <FormLabel>
                <FiUser />
                姓名 *
              </FormLabel>
              <FormInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="请输入您的姓名"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>
                <FiPhone />
                联系方式类型 *
              </FormLabel>
              <FormSelect
                name="contactType"
                value={formData.contactType}
                onChange={handleInputChange}
                required
              >
                {contactTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </FormSelect>
            </FormGroup>

            <FormGroup>
              <FormLabel>
                <FiMail />
                联系方式 *
              </FormLabel>
              <FormInput
                type={formData.contactType === 'email' ? 'email' : 'text'}
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder={
                  formData.contactType === 'email' ? '请输入邮箱地址' :
                  formData.contactType === 'phone' ? '请输入手机号码' :
                  formData.contactType === 'qq' ? '请输入QQ号码' :
                  '请输入微信号'
                }
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>
                <FiMessageSquare />
                反馈类型 *
              </FormLabel>
              <FormSelect
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </FormSelect>
            </FormGroup>

            <FormGroup>
              <FormLabel>
                <FiMessageSquare />
                反馈主题 *
              </FormLabel>
              <FormInput
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="请简要描述您的问题或建议"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>
                <FiMessageSquare />
                详细描述 *
              </FormLabel>
              <FormTextarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="请详细描述您遇到的问题、期望的功能或其他建议..."
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div style={{ 
                    width: '16px', 
                    height: '16px', 
                    border: '2px solid transparent', 
                    borderTop: '2px solid white', 
                    borderRadius: '50%', 
                    animation: 'spin 1s linear infinite' 
                  }} />
                  提交中...
                </>
              ) : (
                <>
                  <FiSend />
                  提交反馈
                </>
              )}
            </SubmitButton>
          </form>

          <ContactInfo>
            <ContactTitle>
              <FiHeadphones />
              其他联系方式
            </ContactTitle>
            <ContactItem>
              <FiMail />
              邮箱：3639163969@qq.com
            </ContactItem>
            <ContactItem>
              <FiUser />
              QQ：3639163969
            </ContactItem>
            <ContactItem>
              <FiMessageSquare />
              微信：BigFe5
            </ContactItem>
          </ContactInfo>
        </ModalBody>
      </ModalContent>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </ModalOverlay>
  );
};

export default CustomerServiceModal; 