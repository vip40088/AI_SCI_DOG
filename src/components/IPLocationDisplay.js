import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiCopy, FiMapPin } from 'react-icons/fi';
import ipGeoService from '../utils/ipGeoService';

const LocationContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.3s ease;
  background: ${props => props.$clickable ? '#f8f9fa' : 'transparent'};
  border: 1px solid ${props => props.$clickable ? '#e9ecef' : 'transparent'};

  &:hover {
    background: ${props => props.$clickable ? '#e9ecef' : '#f8f9fa'};
    transform: ${props => props.$clickable ? 'translateY(-1px)' : 'none'};
  }
`;

const LocationText = styled.span`
  font-size: 13px;
  color: #495057;
  font-weight: 500;
  white-space: nowrap;
`;

const FlagEmoji = styled.span`
  font-size: 14px;
  margin-right: 2px;
`;

const LoadingText = styled.span`
  font-size: 13px;
  color: #6c757d;
  font-style: italic;
`;

const Tooltip = styled.div`
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1000;
  opacity: ${props => props.$show ? 1 : 0};
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.9);
  }
`;

const CopyIcon = styled(FiCopy)`
  font-size: 12px;
  color: #6c757d;
  opacity: 0;
  transition: opacity 0.3s ease;
  margin-left: 4px;

  ${LocationContainer}:hover & {
    opacity: 1;
  }
`;

const IPLocationDisplay = ({ ip, showCopyIcon = true, clickable = true }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const loadLocation = async () => {
      setLoading(true);
      try {
        const locationData = await ipGeoService.getIPLocation(ip);
        setLocation(locationData);
      } catch (error) {
        console.error('获取IP地理位置失败:', error);
        setLocation({
          country: '未知',
          region: '',
          city: '',
          displayText: '解析失败',
          flag: '❓'
        });
      } finally {
        setLoading(false);
      }
    };

    if (ip) {
      loadLocation();
    }
  }, [ip]);

  const handleClick = async () => {
    if (!clickable || !ip) return;

    try {
      await navigator.clipboard.writeText(ip);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('复制IP失败:', error);
      // 降级方案：选择文本
      const textArea = document.createElement('textarea');
      textArea.value = ip;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleMouseEnter = () => {
    if (clickable) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  if (loading) {
    return (
      <LocationContainer>
        <FiMapPin size={12} color="#6c757d" />
        <LoadingText>解析中...</LoadingText>
      </LocationContainer>
    );
  }

  if (!location) {
    return (
      <LocationContainer>
        <span style={{ fontSize: '13px', color: '#6c757d' }}>
          {ip || '未知IP'}
        </span>
      </LocationContainer>
    );
  }

  return (
    <LocationContainer
      $clickable={clickable}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={clickable ? `点击复制IP: ${ip}` : ip}
    >
      <FlagEmoji>{location.flag}</FlagEmoji>
      <LocationText>{location.displayText}</LocationText>
      {showCopyIcon && clickable && <CopyIcon />}
      
      {clickable && (
        <Tooltip $show={showTooltip && !copied}>
          IP: {ip} (点击复制)
        </Tooltip>
      )}
      
      {copied && (
        <Tooltip $show={true}>
          ✓ 已复制到剪贴板
        </Tooltip>
      )}
    </LocationContainer>
  );
};

export default IPLocationDisplay; 